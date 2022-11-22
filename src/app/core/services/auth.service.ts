import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginSchema, SessionSchema, UserLoginSchema } from 'src/app/modules/usuarios/user.interface';
import { UserSchema } from 'src/app/modules/usuarios/user.interface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  protected authenticated = true;

  public isAuthenticated(): boolean {
    return this.authenticated;
  }

  url_root = 'https://62ae1b79b735b6d16a3eee06.mockapi.io/aula/users/1/'
  constructor(private http: HttpClient) { }




  login(usuario: UserSchema): Observable<UserSchema> {
    return this.http.put<UserSchema>(this.url_root, usuario)
  }



  // for sofisticated api 
  loginApi(loginObj: LoginSchema): Observable<SessionSchema> {
    return this.http.post<SessionSchema>(this.url_root + 'login', loginObj)
  }
   
  logoutApi(): Observable<Boolean> {
    //Nos deslogueamos del backend (se borra el token) y devuelve un boolean
    return this.http.post<Boolean>(this.url_root + 'logout', {})
  }
   
  // logout(): Observable<Boolean> {
  //   this.logoutApi();
  //   sessionStorage.removeItem('usuario');
  //   sessionStorage.removeItem('token');
  //   sessionStorage.removeItem('rol');

  // }

  isLoggedIn(){
    return sessionStorage.getItem('usuario')!=null
  }

  getCurrentUser(): string{
    return sessionStorage.getItem('usuario') || "";
  }


  HaveRole(roleNames: any[]){
    console.log(roleNames);
    let role = sessionStorage.getItem('role')
    console.log(role);
    if(roleNames.includes(role)){
      console.log("entre aca")
      return true;
    }else if(role == "admin"){
      return true;
    }else{
      return false;
    }
  }
}

