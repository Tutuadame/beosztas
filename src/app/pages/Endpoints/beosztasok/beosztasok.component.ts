import { Component, OnInit } from '@angular/core';
import { Observable, startWith, Subject, switchMap } from 'rxjs';
import { Assignment } from '../../Objects/interfaces';

@Component({
  selector: 'app-beosztasok',
  templateUrl: './beosztasok.component.html',
  styleUrls: ['./beosztasok.component.css']
})
export class BeosztasokComponent implements OnInit {


  private readonly update$ = new Subject<void>();
  private db$!: Observable<IDBDatabase>;
  public assignments$!: Observable<Assignment[]>;
  constructor() { }


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
                transaction.oncomplete = () => {
                  //transaction = null;
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
  }

}
