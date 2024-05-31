import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAuth0({
      domain: 'oudinia.eu.auth0.com',
      clientId: 'zarlLp8B6Epr1SDIvzOpvC7rxYydybx1',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }),
  ],
};
