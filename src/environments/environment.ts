// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { en_US, zh_CN } from 'ng-zorro-antd';

export const environment = {
  production: false,
  bit: {
    originUrl: '',
    staticUrl: 'https://cdn.kainonly.com/',
    iconUrl: 'https://cdn.kainonly.com/',
    namespace: '/system',
    uploadsUrl: false,
    uploadsPath: '',
    withCredentials: false,
    httpInterceptor: true,
    pageLimit: 10,
    breadcrumbTop: 0,
    col: {
      label: {
        nzXXl: 4,
        nzXl: 5,
        nzLg: 6,
        nzMd: 7,
        nzSm: 24
      },
      control: {
        nzXXl: 8,
        nzXl: 9,
        nzLg: 10,
        nzMd: 14,
        nzSm: 24
      },
      submit: {
        nzXXl: { span: 8, offset: 4 },
        nzXl: { span: 9, offset: 5 },
        nzLg: { span: 10, offset: 6 },
        nzMd: { span: 14, offset: 6 },
        nzSm: { span: 24, offset: 0 }
      }
    },
    localDefault: 'zh_cn',
    localeBind: new Map([
      ['zh_cn', zh_CN],
      ['en_us', en_US]
    ]),
    i18nDefault: 'zh_cn',
    i18nContain: ['zh_cn', 'en_us'],
    i18nSwitch: [
      {
        i18n: 'zh_cn',
        name: {
          zh_cn: '中文',
          en_us: 'Chinese'
        }
      },
      {
        i18n: 'en_us',
        name: {
          zh_cn: '英文',
          en_us: 'English'
        }
      }
    ]
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
