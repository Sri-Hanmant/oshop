import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private authService: AuthService, router: Router) {
    authService.user$.subscribe((user) => {
      if (user) {
        let returnUrl = localStorage.getItem('returnUrl') || '{/}';
        router.navigateByUrl(returnUrl);
      }
    });
  }
}
