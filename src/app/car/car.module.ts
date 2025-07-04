import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './components/car-list/car-list.component';
import { Route, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

const carRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: CarListComponent
  }
]

@NgModule({
  declarations: [
    CarListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(carRoutes),
    HttpClientModule
  ]
})

export class CarModule { }
