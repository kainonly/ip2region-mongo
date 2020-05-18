import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocEditComponent } from './doc-edit.component';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: DocEditComponent
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DocEditComponent]
})
export class DocEditModule {
}
