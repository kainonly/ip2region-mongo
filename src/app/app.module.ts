import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { registerLocaleData } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '@env';
import { ShareModule } from '@share';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';

import { AppComponent } from './app.component';
import { MarkdownModule } from 'ngx-markdown';
import { NzIconService } from 'ng-zorro-antd';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ShareModule,
    MarkdownModule.forRoot({
      loader: HttpClient
    }),
    RouterModule.forRoot(routes, { useHash: true }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(icon: NzIconService) {
    icon.changeAssetsSource(environment.iconSource);
  }
}
