import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginSchema } from 'src/app/models/user.interface';
import { UserSchema } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url_root = 'https://62ae1b79b735b6d16a3eee06.mockapi.io/aula/users/'
  constructor(private http: HttpClient) { }






}

