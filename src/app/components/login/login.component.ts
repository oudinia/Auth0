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
        this.oauthService.tokenValidationHandler = new JwksValidationHandler();
        this.oauthService.setupAutomaticSilentRefresh();
        this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
            if (this.oauthService.hasValidAccessToken()) {
                // Load UserProfile to get the additional claims
                this.oauthService.loadUserProfile();
                console.log('something');
                this.router.navigateByUrl('/');
            } else {
                console.log('something else');
                this.oauthService.initCodeFlow();
            }
        });
    }

    private handleSuccessfulLogin() {
        console.log('ID Token:', this.oauthService.getIdToken());
        console.log('Access Token:', this.oauthService.getAccessToken());
    }
}
