import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionSchema } from '../models/user.interface';
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
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  onLogin() {
    const name = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.submitted = true;


    if(this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        data => this.correctLogin(data),
        )
    }
  }

  private correctLogin(data: SessionSchema){
    
    sessionStorage.setItem('usuario', data.username);
    sessionStorage.setItem('token', data.token)
    this.router.navigate(['']);
  }
}
