import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  email: any;
  password: any;

  constructor(public authService: AuthService, public router: Router) {
  }

  ngOnInit() {
  }

  signup() {
    this.authService.signup(this.email, this.password);
    this.router.navigate(['/const_value']);
  }

}
