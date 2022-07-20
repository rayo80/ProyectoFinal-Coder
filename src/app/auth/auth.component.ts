import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private fb: FormBuilder, private authService: AuthService) { }
  hide: boolean = false;
  ngOnInit(): void {
  }
  loginForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  })

  getUser(){
    //cuando se autentica a un backend lo usual es que se devuelva un Token
    //y como tampoco se mucho de logeos que traiga un usuario y que el token sea el dni
    
  }

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
