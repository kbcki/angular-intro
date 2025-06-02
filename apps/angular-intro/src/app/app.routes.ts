import { Route } from '@angular/router';
import { Page1Component } from '../pages/page-1/page-1.component';
import { PageNComponent } from '../pages/page-n/page-n.component';

export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'page-1',
    pathMatch: 'full',
  },
  {
    path: 'page-1',
    component: Page1Component,
  },
  {
    path: 'page-n',
    redirectTo: 'page-n/1',
    pathMatch: 'full',
  },
  {
    path: 'page-n/:pageNumber',
    component: PageNComponent,
  },
];
