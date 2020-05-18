import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  menuLists: any = [
    {
      name: '仪表盘',
      icon: 'dashboard',
      routing: '',
      nav: 1,
      level: 1
    },
    {
      name: '个人中心',
      icon: 'idcard',
      routing: 'sys',
      nav: 1,
      level: 1
    },
    null,
    {
      name: '文档管理',
      icon: 'project',
      routing: '',
      nav: 1,
      level: 1,
      children: [
        {
          name: '文档列表',
          routing: 'sys/doc-index',
          nav: 1,
          level: 2,
          children: [
            {
              name: '文档新增',
              routing: 'sys/doc-add',
              nav: 0
            },
            {
              name: '文档编辑',
              routing: 'sys/doc-edit',
              nav: 0
            }
          ]
        },
        {
          name: '分类列表',
          router: 'sys/type-index',
          nav: 1,
          level: 2,
          children: [
            {
              name: '分类新增',
              routing: 'sys/type-add',
              nav: 0
            },
            {
              name: '分类编辑',
              routing: 'sys/type-edit',
              nav: 0
            }
          ]
        },
        {
          name: '回收站',
          router: 'sys/recycle',
          nav: 1,
          level: 2
        }
      ]
    },
    {
      name: '访客管理',
      icon: 'team',
      routing: '',
      nav: 1,
      level: 1,
      children: [
        {
          name: '访客列表',
          routing: 'users',
          nav: 1,
          level: 2
        }
      ]
    },
    {
      name: '系统设置',
      icon: 'setting',
      routing: '',
      nav: 1,
      level: 1,
      children: [
        {
          name: '协作者',
          routing: 'admin-index',
          nav: 1,
          level: 2,
          children: [
            {
              name: '协作者新增',
              routing: 'admin-add',
              nav: 0
            },
            {
              name: '协作者编辑',
              routing: 'admin-edit',
              nav: 0
            }
          ]
        },
        {
          name: '权限组',
          routing: 'role-index',
          nav: 1,
          level: 2,
          children: [
            {
              name: '权限组新增',
              routing: 'role-add',
              nav: 0
            },
            {
              name: '权限组修改',
              routing: 'role-edit',
              nav: 0
            }
          ]
        }
      ]
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

  containNav(menus: any[]): boolean {
    return menus.some(v => v.nav === 1);
  }
}
