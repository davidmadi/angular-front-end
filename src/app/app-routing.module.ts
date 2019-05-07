import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { FullComponent } from './layouts/full/full.component';

export const Approutes: Routes = [
  {path: '', component: LoginComponent},
  {
    path: 'full',
    component: FullComponent,
    children: [
      { path: '', redirectTo: './starter', pathMatch: 'full' },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
