// import { initFederation } from '@angular-architects/native-federation';

// initFederation()
//   .catch((err) => console.error(err))
//   .then((_) => import('./bootstrap'))
//   .catch((err) => console.error(err));


  import { initFederation } from '@angular-architects/native-federation';

initFederation()
  .then(() => {
    console.log('Federation initialized home');
    return import('./bootstrap');
  })
  .catch(err => console.error(err));