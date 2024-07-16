import { AuthConfig } from 'angular-oauth2-oidc';

export const authCodeFlowConfig: AuthConfig = {
  issuer: 'https://idsvr4.azurewebsites.net',
  redirectUri: window.location.origin + '/index.html',
  clientId: 'spa',
  responseType: 'code',
  scope: 'openid profile email offline_access api',
  showDebugInformation: true,
  timeoutFactor: 0.01,
};

export const authZeroCodeFlowConfig: AuthConfig = {
  issuer: 'https://oudinia.eu.auth0.com/',
  redirectUri: window.location.origin + '/welcome',
  clientId: 'zarlLp8B6Epr1SDIvzOpvC7rxYydybx1',
  responseType: 'code',
  scope: 'openid profile email offline_access api',
  showDebugInformation: true,
  timeoutFactor: 0.01,
};
