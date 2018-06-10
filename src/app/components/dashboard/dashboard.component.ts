import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  cards = [
    { 
      header:'Daily expense tracker',
      imgUrl:'/assets/images/coin.jpg',
      cols: 1, 
      rows: 1,
     },
    { 
      header:'Reminder',
      imgUrl:'/assets/images/reminder.jpg',
      cols: 1,
      rows: 1
     },
     { 
      header:'Document Manager',
      imgUrl:'/assets/images/document.jpg',
      cols: 1,
      rows: 1
     },

  ];
  constructor(private router:Router){
  }

  onClick(header:string):void{
    this.router.navigate(['/expense-tracker/'])
  }
}
