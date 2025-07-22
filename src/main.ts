import { initFederation } from '@angular-architects/native-federation';
import { environment } from './environments/environment';

initFederation()
  .catch(err => console.error(err))
  .then(_ => {
    if (environment.standalone) {
      return import('./bootstrap-standalone');
    } else {
      return import('./bootstrap');
    }
  })
  .catch(err => console.error(err));
