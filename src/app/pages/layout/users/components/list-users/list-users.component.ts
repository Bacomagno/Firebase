import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { UsersModule } from '../../users.module';
import { CreateUsersComponent } from '../create-users/create-users.component';


export interface PeriodicElement {
  name: string;
  position: number;
  Identificate: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', Identificate: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', Identificate: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', Identificate: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', Identificate: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', Identificate: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', Identificate: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', Identificate: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', Identificate: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', Identificate: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', Identificate: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']

})
export class ListUsersComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'Identificate', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(
    public dialog: MatDialog,
    public userModule: UsersModule,
    private router: Router
  ) { }

  addUsers(id: number) {
    const dialogRef = this.dialog.open(CreateUsersComponent, {
      width: '750px',
      height: '75%',
      data: { idUser: id },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log (`Device add: ${result}`);
    });
  }

  ngOnInit(): void {
  }


}
