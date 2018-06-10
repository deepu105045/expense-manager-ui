import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExpenseTrackerComponent } from './components/expense-tracker/expense-tracker.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  { path:'expense-tracker',component: ExpenseTrackerComponent },
  { path:'dashboard',component: DashboardComponent },
  { path:'', redirectTo:'/dashboard' ,pathMatch:'full' },
  { path:'**', redirectTo:'/dashboard' ,pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
