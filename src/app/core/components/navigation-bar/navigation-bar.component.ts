import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'crm-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  @Output() toggleSidenav = new EventEmitter<void>();
  constructor(private authService: AuthService, private router: Router) { }

  nombreUsuario: string;

  ngOnInit(): void {
    this.nombreUsuario = this.authService.getCurrentUser()
  }

  public isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  toHome(): void {
    this.router.navigate(['']);
  }
}

