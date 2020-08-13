import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { GenericService } from 'src/app/shared/services/generic.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  public displayedColumns: string[] = ['name', 'dateOfBirth', 'emailId', 'number', 'gender', 'options'];
  public dataSource;

  /**
   * Creates an instance of UserListComponent.
   * @param {GenericService} genericService
   * @memberof UserListComponent
   */
  constructor(private genericService: GenericService) {
    this.getAllUsers();
  }

  /**
   *
   *
   * @private
   * @memberof UserListComponent
   */
  private getAllUsers() {
    this.genericService.get('getAllUsers').subscribe(users => {
      if (users) {
        this.dataSource = new MatTableDataSource(users);
      }
    }, error => {
      console.error(error);
    });
  }

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

  delete(id) {
    this.genericService.delete(`deleteUser/${id}`).subscribe((res: any) => {
      if (!res.error) {
        this.getAllUsers();

      }
    }, (error) => {

      console.error(error);
    });
  }



}
