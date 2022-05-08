import { Component, ElementRef, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title: string = 'beosztas';
  page: string = '';

  constructor(private router: Router, private el: ElementRef){}
  ngOnInit(): void {
    
  }

  changeContent(selectedPage: string, sidenav: MatSidenav){
    this.page = selectedPage;
    sidenav.close();
    this.router.navigateByUrl(selectedPage);

  }
  onToggleSideNav(sidenav: MatSidenav){
    sidenav.toggle(); 
  }
}
