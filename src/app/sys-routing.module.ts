import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      {
        path: 'doc-index',
        loadChildren: () => import('./doc-index/doc-index.module').then(m => m.DocIndexModule)
      },
      {
        path: 'doc-add',
        loadChildren: () => import('./doc-add/doc-add.module').then(m => m.DocAddModule)
      },
      {
        path: 'doc-edit/:id',
        loadChildren: () => import('./doc-edit/doc-edit.module').then(m => m.DocEditModule)
      },
      {
        path: 'type-index',
        loadChildren: () => import('./type-index/type-index.module').then(m => m.TypeIndexModule)
      },
      {
        path: 'type-add',
        loadChildren: () => import('./type-add/type-add.module').then(m => m.TypeAddModule)
      },
      {
        path: 'type-edit/:id',
        loadChildren: () => import('./type-edit/type-edit.module').then(m => m.TypeEditModule)
      },
      {
        path: 'recycle',
        loadChildren: () => import('./recycle/recycle.module').then(m => m.RecycleModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'admin-index',
        loadChildren: () => import('./admin-index/admin-index.module').then(m => m.AdminIndexModule)
      },
      {
        path: 'admin-add',
        loadChildren: () => import('./admin-add/admin-add.module').then(m => m.AdminAddModule)
      },
      {
        path: 'admin-edit/:id',
        loadChildren: () => import('./admin-edit/admin-edit.module').then(m => m.AdminEditModule)
      },
      {
        path: 'role-index',
        loadChildren: () => import('./role-index/role-index.module').then(m => m.RoleIndexModule)
      },
      {
        path: 'role-add',
        loadChildren: () => import('./role-add/role-add.module').then(m => m.RoleAddModule)
      },
      {
        path: 'role-edit/:id',
        loadChildren: () => import('./role-edit/role-edit.module').then(m => m.RoleEditModule)
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: [
    ProfileComponent
  ]
})
export class SysRoutingModule {
}
