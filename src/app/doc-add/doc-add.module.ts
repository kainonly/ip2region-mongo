import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocAddComponent } from './doc-add.component';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: DocAddComponent
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DocAddComponent]
})
export class DocAddModule {
}
