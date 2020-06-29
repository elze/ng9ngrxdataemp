import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [
  { path: 'employees', component: EmployeesComponent } ,
  { path: 'todos', component: TodosComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
