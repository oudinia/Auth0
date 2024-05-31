import { Component, OnInit, effect, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { AuthenticationService } from '../autho-service';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent implements OnInit {
  constructor(private autho: AuthenticationService, private router: Router) {
    effect(() => {
      if (this.autho.isAuthenticated()) {
        console.log('User is authenticated');
        this.router.navigate(['/dashboard']);
      } else {
        console.log('User is not authenticated');
      }
    });
  }

  ngOnInit(): void {}

  login() {
    this.autho.loginWithRedirect();
  }
}
