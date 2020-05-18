import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeAddComponent } from './type-add.component';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: TypeAddComponent
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TypeAddComponent]
})
export class TypeAddModule {
}
