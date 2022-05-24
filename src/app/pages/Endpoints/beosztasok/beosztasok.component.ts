import { Component, OnInit } from '@angular/core';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { AssignmentService } from 'src/app/services/assignments/assignment.service';
import { Assignment, Assistant, CouldWork } from '../../Objects/interfaces';
import { SwUpdate } from '@angular/service-worker';
import { AssistantService } from 'src/app/services/assistants/assistant.service';
import { CouldworkService } from 'src/app/services/couldworks/couldwork.service';


@Component({
  selector: 'app-beosztasok',
  templateUrl: './beosztasok.component.html',
  styleUrls: ['./beosztasok.component.css']
})
export class BeosztasokComponent implements OnInit {

  private readonly update$ = new Subject<void>();
  private db$!: Observable<IDBDatabase>;
  public assignments$!: Observable<Assignment[]>;
  req: any;

  constructor(private assign_ser: AssignmentService, private assistant_ser: AssistantService, private rendeles_ser: CouldworkService) { }

  public async addBeosztas(): Promise<void> {
    this.clearBeosztas();
    this.assign_ser.getAll().subscribe((data: Array<Assignment>) => {        
      this.db$
      .pipe(
        switchMap(
          (db) =>
            new Observable((observer) => {
              let transaction = db.transaction("beosztasok", "readwrite");              
              transaction.objectStore("beosztasok").add({name: "Beosztas",  data});              
              transaction.oncomplete = () => {                       
                this.update$.next();
                observer.complete();
              };
              return () => transaction?.abort();
            })
        )
      )
      .subscribe();
    }); 
    this.assistant_ser.getAll().subscribe((data: Array<Assistant>) => {              
      this.db$
      .pipe(
        switchMap(
          (db) =>
            new Observable((observer) => {
              let transaction = db.transaction("beosztasok", "readwrite");              
              transaction.objectStore("beosztasok").add({name: "Asszisztensek",  data});              
              transaction.oncomplete = () => {                       
                this.update$.next();
                observer.complete();
                
              };
              return () => transaction?.abort();
            })
        )
      )
      .subscribe();
    }); 
    this.rendeles_ser.getAll().subscribe((data: Array<CouldWork>) => {  
      this.db$
      .pipe(
        switchMap(
          (db) =>
            new Observable((observer) => {
              let transaction = db.transaction("beosztasok", "readwrite");              
              transaction.objectStore("beosztasok").add({name: "Rendelesek",  data});              
              transaction.oncomplete = () => {                       
                this.update$.next();
                observer.complete();
              };
              return () => transaction?.abort();
            })
        )
      )
      .subscribe();
    });    
  }

  public clearBeosztas(): void {
    this.db$
      .pipe(
        switchMap(
          (db) =>
            new Observable((observer) => {
              let transaction = db.transaction("beosztasok", "readwrite");
              transaction.objectStore("beosztasok").clear();

              transaction.oncomplete = () => {                
                this.update$.next();
                observer.complete();
              };
              return () => transaction?.abort();
            })
        )
      )
      .subscribe();
  }

  public getSaved(){    
    this.db$
      .pipe(
        switchMap(
          (db) =>
            new Observable((observer) => {
              let transaction = db.transaction("beosztasok", "readwrite");
              this.req = transaction.objectStore("beosztasok").getAll();
              
              transaction.oncomplete = () => {                
                this.update$.next();
                observer.complete();                              
                this.req = this.req.result;
              };                      
              return () => transaction?.abort();
            })
                          
        )
      )
      .subscribe();      
      
  }


  private updatingAssignments(): void {
    this.assignments$ = this.update$.pipe(
      startWith(undefined),
      switchMap(() =>
        this.db$.pipe(
          switchMap(
            (db) =>
              new Observable<Assignment[]>((observer) => {
                let transaction = db.transaction("beosztasok");
                const request = transaction.objectStore("beosztasok").getAll();
                //console.log(request);
                transaction.oncomplete = () => {                  
                  observer.next(request.result as Assignment[]);
                  observer.complete();
                };                            
              })
          )
        )
      )
    );
  }

  createIddb(db: IDBDatabase): void{
    
    db.createObjectStore("beosztasok", { keyPath: "name" });
    console.log("create", db);
  }

  private initDB(): void{
    
    this.db$ = new Observable<IDBDatabase>((observer) => {
      const openRequest = indexedDB.open("beosztasDB"); 
      openRequest.onupgradeneeded = () => this.createIddb(openRequest.result);
      openRequest.onsuccess = () => {
        observer.next(openRequest.result);
        observer.complete();
      };
    });
    
  }

  ngOnInit(): void {    
    this.initDB();    
    this.updatingAssignments();    
    this.getSaved();
  }

}
