import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "http://localhost:9595"

  constructor(private http: HttpClient) { }

  //calling the server to genereate token

  generateToken(credentials: any) {

    //token generate
    return this.http.post(`${this.url}/token`, credentials)

  }

  //for login user
  loginUser(token: string) {
    localStorage.setItem("token", token)
    return true;

  }
  //to check if user is logged in or not
  isLoggedIn() {

    let token = localStorage.getItem("token");
    if (token == undefined || token == '' || token == null) {
      return false;
    } else {
      return true;
    }
  }
  //to logout
  logout() {

    localStorage.removeItem("token");
    return true;
  }

  //for getting token
  getToken() {
    return localStorage.getItem("token");
  }
}
