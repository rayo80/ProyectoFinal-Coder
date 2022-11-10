import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public user: any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('usuario');
    if (this.user == null) {
      this.router.navigate(['/login']);
    }
  }

}
