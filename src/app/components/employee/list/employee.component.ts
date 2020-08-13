import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import Employee from '../../../../assets/employee.json';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent {

  public displayedColumns: string[] = ['name', 'dateOfBirth', 'phoneNo', 'emailId'];

  // Here Giving Employee Array from JSON file directly to data source
  public dataSource = new MatTableDataSource(Employee.Employees);

  /**
   * For search
   *
   * @param {Event} event
   * @memberof EmployeeComponent
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }


}
