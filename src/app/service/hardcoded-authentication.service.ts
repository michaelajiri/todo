import { Injectable } from '@angular/core';
import { AUTHENTICATED_USER } from './../app.constants';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username, password) {
    // console.log('Before: ' + this.isUserLoggedIn())
    if (username === 'Michael89' && password === 'test123') {
      sessionStorage.setItem(AUTHENTICATED_USER, username)
      // console.log('After: ' + this.isUserLoggedIn())
      return true;
    }
    return false;
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null);
  }

  loggedOutUser() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
  }
}