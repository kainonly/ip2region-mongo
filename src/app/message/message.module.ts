import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessageComponent } from './message.component';
import { ShareModule } from '../share.module';

const routes: Routes = [
  {
    path: '',
    component: MessageComponent
  }
];

@NgModule({
  imports: [
    ShareModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MessageComponent]
})
export class MessageModule {
}
