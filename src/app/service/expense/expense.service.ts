import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TransactionInfo } from '../../model/TransactionInfo';

const httpOptions = {
  headers :new HttpHeaders({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(private http:HttpClient) { }

  getExpenses(){
    return this.http.get('/server/api/v1/expense');
  }

  addExpense(transactionInfo:TransactionInfo){
    return this.http.post('/server/api/v1/expense',transactionInfo,httpOptions);
  }

}
