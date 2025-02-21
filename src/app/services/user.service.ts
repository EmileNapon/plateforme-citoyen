import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://127.0.0.1:8000/plateforme-integre/';

  constructor(private http: HttpClient) {}

  registerUser(formData: FormData): Observable<User> {
    return this.http.post<User>(this.apiUrl, formData);
  }
}