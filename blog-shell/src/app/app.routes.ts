import { Routes } from '@angular/router';
//import { loadRemoteModule } from '@angular-architects/native-federation';
import { loadRemoteModule } from '@angular-architects/native-federation';

export const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      loadRemoteModule('home', './routes')
        .then(m => m.routes)
  },
 {
  path: 'posts',
  loadChildren: () =>
    loadRemoteModule('posts', './routes')
      .then(m => {
        console.log('Posts loaded', m);
        return m.routes;
      })
      .catch(err => {
        console.error('Posts failed', err);
        throw err;
      })
  },
  {
    path: 'admin',
    loadChildren: () =>
      loadRemoteModule('admin', './routes')
        .then(m => m.routes)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

// import { Routes } from '@angular/router';
// import { loadRemoteModule } from '@angular-architects/native-federation';

// export const routes: Routes = [
//   {
//     path: 'home',
//     loadChildren: () =>
//       loadRemoteModule('home', './routes')
//         .then(m => m.routes)
//   },
//   {
//     path: '',
//     redirectTo: 'home',
//     pathMatch: 'full'
//   }
// ];