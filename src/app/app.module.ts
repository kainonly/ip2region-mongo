import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';

registerLocaleData(zh);

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { NzIconService } from 'ng-zorro-antd';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { DocIndexComponent } from './doc-index/doc-index.component';
import { DocAddComponent } from './doc-add/doc-add.component';
import { DocEditComponent } from './doc-edit/doc-edit.component';
import { TypeIndexComponent } from './type-index/type-index.component';
import { TypeAddComponent } from './type-add/type-add.component';
import { TypeEditComponent } from './type-edit/type-edit.component';
import { RecycleComponent } from './recycle/recycle.component';
import { UsersComponent } from './users/users.component';
import { MessageComponent } from './message/message.component';
import { AdminIndexComponent } from './admin-index/admin-index.component';
import { AdminAddComponent } from './admin-add/admin-add.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { RoleIndexComponent } from './role-index/role-index.component';
import { RoleAddComponent } from './role-add/role-add.component';
import { RoleEditComponent } from './role-edit/role-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    DocIndexComponent,
    DocAddComponent,
    DocEditComponent,
    TypeIndexComponent,
    TypeAddComponent,
    TypeEditComponent,
    RecycleComponent,
    UsersComponent,
    MessageComponent,
    AdminIndexComponent,
    AdminAddComponent,
    AdminEditComponent,
    RoleIndexComponent,
    RoleAddComponent,
    RoleEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NzLayoutModule,
    NzSpaceModule,
    NzBreadCrumbModule,
    NzMenuModule,
    NzIconModule,
    AppRoutingModule,
    ServiceWorkerModule.register(
      'ngsw-worker.js',
      { enabled: environment.production }
    )
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
