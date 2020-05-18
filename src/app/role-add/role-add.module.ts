import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleAddComponent } from './role-add.component';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: RoleAddComponent
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RoleAddComponent]
})
export class RoleAddModule {
}
