import { Component, OnInit } from '@angular/core';
import { Employee } from './state';
import { Observable } from 'rxjs';
import { EmployeeCollectionService } from "./employee-collection.service";

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  employees$: Observable<Employee[]>;
  loading$: Observable<boolean>;
  constructor(private employeeCollectionService: EmployeeCollectionService) { 
    this.employees$ = employeeCollectionService.entities$;
  }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeCollectionService.getAll();
  }

}
