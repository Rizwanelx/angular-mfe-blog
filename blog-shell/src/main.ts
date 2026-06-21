import { initFederation } from '@angular-architects/native-federation';


initFederation('/federation.manifest.json')
  .catch((err) => console.error(err))
  .then((_) => import('./bootstrap'))
  .catch((err) => console.error(err));


// import { initFederation } from '@angular-architects/native-federation';

// initFederation('/federation.manifest.json')
//   .then(() => {
//     console.log('Federation initialized');
//     return import('./bootstrap');
//   })
//   .catch(err => console.error(err));