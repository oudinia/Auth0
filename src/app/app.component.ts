import {Component, inject, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {OAuthService} from 'angular-oauth2-oidc';
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

  constructor(private router: Router) {

  }

  get idToken(): string {
    return this.oauthService.getIdToken();
  }

  login() {
    this.router.navigate(['/login']);
  }


  logout() {
    this.oauthService.logOut();
    this.router.navigate(['/home']);
  }
}
