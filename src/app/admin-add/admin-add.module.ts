import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddComponent } from './admin-add.component';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: AdminAddComponent
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminAddComponent]
})
export class AdminAddModule {
}
