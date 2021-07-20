import { ActivatedRoute } from '@angular/router';
import 'firebase/firestore';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$!: Observable<firebase.User | null>;

  constructor(
    public afAuth: AngularFireAuth,
    private route: ActivatedRoute // Inject Firebase auth service
  ) {
    this.user$ = afAuth.authState;
  }

  // Sign in with Google
  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.signOut();
  }
}
