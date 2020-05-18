import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocIndexComponent } from './doc-index.component';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: DocIndexComponent
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DocIndexComponent]
})
export class DocIndexModule {
}
