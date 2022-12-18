import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource} from '@angular/material/table';

import { IUser } from 'src/app/core/interfaces/user.interface';
import { CreateUsersComponent } from './create-users/create-users.component';

const ELEMENT_DATA: IUser[] = [
  { position: 1, name: 'Hydrogen', Identificate: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', Identificate: 4.0026, symbol: 'He '},
  { position: 3, name: 'Lithium', Identificate: 6.941, symbol: 'Li '},
  { position: 4, name: 'Beryllium', Identificate: 9.0122, symbol: 'Be '},
  { position: 5, name: 'Boron', Identificate: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', Identificate: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', Identificate: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', Identificate: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', Identificate: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', Identificate: 20.1797, symbol: 'Ne '}
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  displayedColumns: string[] = ['position', 'name', 'Identificate', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor(public dialog: MatDialog) { }

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
}
