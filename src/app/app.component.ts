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
    null,
    {
      name: '手记',
      icon: 'project',
      routing: '',
      nav: 1,
      level: 1
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
