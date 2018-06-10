import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TransactionInfo } from '../../model/TransactionInfo';
import { ExpenseService } from '../../service/expense/expense.service';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css']
})
export class ExpenseTrackerComponent implements OnInit {
  expenseTrackerForm:FormGroup;
  today: Date;
  day: number;
  month: number;
  year: number;
  expenses: any= [];
  
  constructor(private _fb: FormBuilder,private expenseService:ExpenseService) { }

  ngOnInit() {
    this.today = new Date();
    this.day = this.today.getDate();
    this.month = this.today.getMonth()+1;
    this.year = this.today.getFullYear();
    this.expenseTrackerForm = this._fb.group({
      date:[this.day +"/" + this.month +"/"+ this.year,Validators.required],
      amount:['',Validators.required],
      category : ['',Validators.required]
    });

    const categoryControl = this.expenseTrackerForm.get('category');
    categoryControl.valueChanges.subscribe(userInput => {
      console.log(userInput);
    })

    this.getExpense();
  }

  createTransaction():void{
    let transactionInfo = new TransactionInfo();
    transactionInfo.date = this.expenseTrackerForm.controls.date.value;
    transactionInfo.amount = this.expenseTrackerForm.controls.amount.value;
    transactionInfo.category = this.expenseTrackerForm.controls.category.value;
    this.expenseService.addExpense(transactionInfo).subscribe(
      data =>{ 
        console.log("Transacion saved " + data);
        this.expenses.push(data);
      },
      err => console.log(err),
      () => console.log("Check transaction is saved !!!")
    );
  } 

getExpense(){
  this.expenseService.getExpenses().subscribe(
    data => this.expenses= data,
    err => console.log(err),
    () => console.log("expenses loaded.")
  );
}

}
