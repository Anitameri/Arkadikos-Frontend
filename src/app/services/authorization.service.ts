import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { logged_user } from 'app/interface/logged_user';
import { login } from 'app/interface/login';
import { User } from 'app/interface/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService{
  public user_info:logged_user = new logged_user("", 0, new Array<String>(), "", "", "");
  private AUTH_API = 'http://127.0.0.1:8080/api/users/';

  constructor(private http: HttpClient) { }
  login(login:login): Observable<Object> {
    return this.http.post(`${this.AUTH_API}signin`, login);
  }
  register(user:User): Observable<Object> {
    return this.http.post(`${this.AUTH_API}create`, user);
  }
}
