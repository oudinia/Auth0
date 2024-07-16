import {Component, inject} from '@angular/core';
import {authZeroCodeFlowConfig} from "../../auth.config";
import {JwksValidationHandler, OAuthService} from "angular-oauth2-oidc";
import {Router} from "@angular/router";

@Component({
    selector: 'login',
    standalone: true,
    imports: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss'
})
export class LoginComponent {
    oauthService = inject(OAuthService);

    constructor(private router: Router) {
        this.oauthService.configure(authZeroCodeFlowConfig);
        this.oauthService.loadDiscoveryDocumentAndLogin().then(result => {
            console.log(result)
            this.router.navigate(['/welcome']);
        });
        console.log('LoginComponent constructor');
    }

    private handleSuccessfulLogin() {
        console.log('ID Token:', this.oauthService.getIdToken());
        console.log('Access Token:', this.oauthService.getAccessToken());
    }
}
