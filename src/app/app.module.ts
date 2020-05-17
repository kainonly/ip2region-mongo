import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { registerLocaleData } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import zh from '@angular/common/locales/zh';
import { environment } from '../environments/environment';

registerLocaleData(zh);

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NzIconService } from 'ng-zorro-antd/icon';

import { AppComponent } from './app.component';
import { ShareModule } from './share.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'system',
    loadChildren: () => import('./system-routing.module').then(m => m.SystemRoutingModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ShareModule,
    RouterModule.forRoot(routes, { useHash: true }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    nzIconService: NzIconService
  ) {
    nzIconService.changeAssetsSource(environment.iconUrl);
  }
}
