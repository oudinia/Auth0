import {Component, OnInit, effect, signal, inject} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AuthenticationService } from '../../services/autho-service';
import {filter} from "rxjs/operators";
import {OAuthService} from "angular-oauth2-oidc";
import {authZeroCodeFlowConfig} from "../../auth.config";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent implements OnInit {
  oauthService = inject(OAuthService);

  constructor() {
    this.oauthService.configure(authZeroCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin().then(result => {

      console.log(result)
    });
    this.oauthService.events
      .pipe(filter((e) => e.type === 'token_received'))
      .subscribe((_) =>  {
        console.log(this.oauthService.getIdToken())
        return      this.oauthService.loadUserProfile()
      });
  }

  ngOnInit(): void {

  }

  get userName(): string {
    const claims = this.oauthService.getIdentityClaims();
    if (!claims) return '';
    return claims['given_name'];
  }

  get idToken(): string {
    return this.oauthService.getIdToken();
  }

  get accessToken(): string {
    return this.oauthService.getAccessToken();
  }

  refresh() {
    this.oauthService.refreshToken();
  }
}
