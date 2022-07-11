import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  hide: boolean = false;
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })


  onLogin() {
    this.authService.isLogin=true;
    /*
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
    */
  }
}
