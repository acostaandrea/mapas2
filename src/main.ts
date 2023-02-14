import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
 
Mapboxgl.accessToken = 'pk.eyJ1IjoiYWNvc3RhYW5kcmVhZGV2IiwiYSI6ImNsYWlld3BjazAxenEzd3FqZnY1aG1icWwifQ.u5fl5sMAFCnCKCAlPngSkw';

if(!navigator.geolocation){
  alert('Navegador no soporta geolocation')
  throw new Error('Navegador no soporta geolocation');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
