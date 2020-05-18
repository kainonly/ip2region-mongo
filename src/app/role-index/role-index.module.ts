import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleIndexComponent } from './role-index.component';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: RoleIndexComponent
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RoleIndexComponent]
})
export class RoleIndexModule {
}
