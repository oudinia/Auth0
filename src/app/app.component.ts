import {Component, inject, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authZeroCodeFlowConfig } from './auth.config';
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatButton],
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
