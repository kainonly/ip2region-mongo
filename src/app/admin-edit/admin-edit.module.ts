import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditComponent } from './admin-edit.component';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: AdminEditComponent
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdminEditComponent]
})
export class AdminEditModule {
}
