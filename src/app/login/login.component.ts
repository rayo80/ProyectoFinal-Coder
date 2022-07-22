import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide: boolean = false;
  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
  }
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })
  onLogin() {
    const name = this.loginForm.value.username;
    const password = this.loginForm.value.password;

    /*
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
    */
  }
}
