import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      {
        path: 'device',
        loadChildren: () =>
          import('./components/device/device.module').then(
            (module) => module.DeviceModule
          ),
      },
      {
        path: 'identificationType',
        loadChildren: () =>
          import(
            './components/identification-type/identification-type.module'
          ).then((module) => module.IdentificationTypeModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./components/users/users.module').then(
            (module) => module.UsersModule
          ),
      },
    ],
  },
  { path: '**', redirectTo: '/users/list', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
