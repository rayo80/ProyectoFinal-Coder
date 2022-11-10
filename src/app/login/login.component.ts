import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionSchema, UserLoginSchema, UserSchema } from '../modules/usuarios/user.interface';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = false;
  public submitted: Boolean = false;
  public error: {code: number, message: string};


  constructor(private fb: FormBuilder, private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
  }

  loginForm: FormGroup = this.fb.group({
    username: ['admin', [Validators.required]],
    password: ['admin', [Validators.required, Validators.minLength(3)]],
    admin: [false]
  })

  onLogin() {


    this.submitted = true;

    if(this.loginForm.valid){
      let usuario: UserSchema = {
        username: this.loginForm.value.username,
        password: this.loginForm.value.password,
        is_admin: this.loginForm.value.admin,
        dni: '325',
        id: 0
      }

      this.authService.login(usuario).subscribe(
        data => this.correctLogin(data),
      )

      /*
      this.authService.loginApi(this.loginForm.value).subscribe(
        data => this.correctLogin(data),
      )
      */
    }
  }

  private correctLogin(data: UserSchema){
    
    sessionStorage.setItem('usuario', data.username);
    //sessionStorage.setItem('token', data.token)
    sessionStorage.setItem('role', data.is_admin? 'admin': 'invitado' );
    this.router.navigate(['/']);
  }

  /*
  private correctLogin(data: SessionSchema){
    
    sessionStorage.setItem('usuario', data.username);
    //sessionStorage.setItem('token', data.token)
    //sessionStorage.setItem('admin', data.role)
    this.router.navigate(['/']);
  }
  */

}
