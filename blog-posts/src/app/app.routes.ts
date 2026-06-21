import { Routes } from '@angular/router';
import { BlogList } from './pages/blog-list/blog-list';
import { BlogDetail } from './pages/blog-detail/blog-detail';

export const routes: Routes = [
  {
    path: '',
    component: BlogList
  },
  {
    path: ':id',
    component: BlogDetail
  }
];
