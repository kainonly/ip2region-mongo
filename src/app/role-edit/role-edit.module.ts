import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleEditComponent } from './role-edit.component';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: RoleEditComponent
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RoleEditComponent]
})
export class RoleEditModule {
}
