import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminIndexComponent } from './admin-index.component';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: AdminIndexComponent
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminIndexComponent]
})
export class AdminIndexModule {
}
