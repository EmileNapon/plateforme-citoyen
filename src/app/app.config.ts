import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/http-interceptor';


export const appConfig: ApplicationConfig = {
  providers: [ provideHttpClient(
    withFetch(), // Active l'utilisation de la Fetch API
    withInterceptors([authInterceptor]) // Enregistre les intercepteurs
  ),provideHttpClient(withFetch()),provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(withEventReplay())]
};

