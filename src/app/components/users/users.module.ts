import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListUsersComponent } from './components/list-users/list-users.component';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { MaterialModule } from 'src/app/material/material.module';
import { UsersRoutingModule } from './users-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateUsersComponent, ListUsersComponent],

  imports: [
    CommonModule,
    MaterialModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports:[
    MaterialModule
  ]
})
export class UsersModule {}
