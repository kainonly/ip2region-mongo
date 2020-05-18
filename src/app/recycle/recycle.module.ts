import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecycleComponent } from './recycle.component';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: RecycleComponent
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RecycleComponent]
})
export class RecycleModule {
}
