import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: any;
  password: any;

  constructor(public authService: AuthService, public router: Router) {
    if (authService.user) {
      this.router.navigate(['/home']);
    }
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.router.navigate(['/home']);
  }

  login() {
    this.authService.login(this.email, this.password);
    this.router.navigate(['/home']);
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }

}
