import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeIndexComponent } from './type-index.component';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: TypeIndexComponent
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TypeIndexComponent]
})
export class TypeIndexModule {
}
