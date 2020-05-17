import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule {
}
