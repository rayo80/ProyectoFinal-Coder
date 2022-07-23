import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginSchema, SessionSchema } from 'src/app/models/user.interface';
import { UserSchema } from 'src/app/models/user.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url_root = 'http://localhost:8882/'
  constructor(private http: HttpClient) { }

  extractData: any;
  login(loginObj: LoginSchema): Observable<SessionSchema> {
    return this.http.post<SessionSchema>(this.url_root + 'login', loginObj)
  }
   
  logout(): Observable<Boolean> {
    return this.http.post<Boolean>(this.url_root + 'logout', {}).pipe(
      map((data: Boolean) => this.extractData ));
  }
   


}

