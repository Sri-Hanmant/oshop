import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';
import firebase from 'firebase';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
})
export class BsNavbarComponent {
  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
