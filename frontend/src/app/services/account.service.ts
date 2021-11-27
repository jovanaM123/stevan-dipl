import { User } from './../interfaces/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserCreate } from '../interfaces/UserCreate';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  url = environment.accountServiceUrl;

  constructor(private _http: HttpClient) {}

  public registerUser = (user: UserCreate) => {
    return this._http.post<string>(`${this.url}/register`, user);
  };

  public isEmailExists = (email: string): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
      this._http
        .post<User>(`${this.url}/emailExtists`, email)
        .subscribe((data) => {
            if(data != null)
            {
              resolve(true);
            }

            resolve(false);
        });
    });
  };
}
