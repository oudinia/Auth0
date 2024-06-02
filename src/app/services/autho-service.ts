import { Injectable, Signal, computed } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
  isAuthenticated = toSignal(this.auth.isAuthenticated$, {
    initialValue: false,
  });

  user = toSignal(this.auth.user$, {
    initialValue: null,
  });

  constructor(private auth: AuthService) {}

  loginWithRedirect(): void {
    this.auth.loginWithRedirect();
  }

  logout(): void {
    this.auth.logout({ logoutParams: { returnTo: window.location.origin } });
  }
}
