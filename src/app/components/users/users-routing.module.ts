import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUsersComponent } from './components/create-users/create-users.component';
import { ListUsersComponent } from './components/list-users/list-users.component';

const routes: Routes = [
  { path: 'list', component: ListUsersComponent },
  {path: 'create', component: CreateUsersComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
