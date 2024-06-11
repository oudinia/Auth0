import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig, authZeroCodeFlowConfig } from './auth.config';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {

  oauthService = inject(OAuthService);

  constructor() {



  }


  login() {
    this.oauthService.configure(authZeroCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndLogin().then(result => {

      console.log(result)
    });


    }



  logout() {
    this.oauthService.logOut();
  }
}
