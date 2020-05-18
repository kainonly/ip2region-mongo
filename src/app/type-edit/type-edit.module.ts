import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeEditComponent } from './type-edit.component';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: TypeEditComponent
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TypeEditComponent]
})
export class TypeEditModule {
}
