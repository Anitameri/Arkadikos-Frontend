import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { logged_user } from 'app/interface/logged_user';
import { login } from 'app/interface/login';
import { User } from 'app/interface/user';
import { token } from 'app/interface/token';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService{
  public user_info:logged_user = new logged_user("", 0, new Array<String>(), new token(new Date(), ""), "", "");
  private AUTH_API = 'http://127.0.0.1:8080/api/users/';

  constructor(private http: HttpClient) { }

  isLogged():boolean
    {
        if(this.user_info.token?.expiration)
            return this.user_info.token?.token != "" || this.user_info.token?.expiration.getDate() >= new Date().getTime();
        return false;
    }

    public logout():void
    {
        this.user_info.roles = new Array<String>();
        this.user_info.email = "";
        this.user_info.token = new token(new Date(), "");
        this.user_info.type = "";
        this.user_info.username = "";
        this.user_info.id = 0;
    }

    public isAdmin():boolean
    {
        let b = false;
        this.user_info.roles?.forEach(function(value)
        {
            if(value == "ROLE_ADMIN")
                b = true;
        });
        return b;
    }

  login(login:login): Observable<Object> {
    return this.http.post(`${this.AUTH_API}signin`, login);
  }
  register(user:User): Observable<Object> {
    return this.http.post(`${this.AUTH_API}create`, user);
  }

  setToken(): HttpHeaders
  {
    return new HttpHeaders().set("Authorization", `Bearer ${this.user_info.token?.token}`);
  }
}
