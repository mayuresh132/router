import { Router } from '@angular/router';

import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService, AppGlobals } from 'angular2-google-login';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],
  providers: [AuthService]
})
export class DashComponent implements OnInit {
  imageURL: string;
  email: string;
  name: string;
  token: string;
  phone: string;
  gender: any;
  constructor(private auth: AuthService,  private zone: NgZone, private router: Router) { }

  ngOnInit() {

    this.token = localStorage.getItem('token');
    this.imageURL = localStorage.getItem('image');
    this.name = localStorage.getItem('name');
    this.email = localStorage.getItem('email');
     this.phone = localStorage.getItem('phone');
        }
        logout() {
          const scopeReference = this;
          this.auth.userLogout(function () {
            scopeReference.clearLocalStorage();
          });
          this.router.navigate(['']);
        }

         clearLocalStorage() {
          localStorage.removeItem('token');
          localStorage.removeItem('image');
          localStorage.removeItem('name');
          localStorage.removeItem('email');
            localStorage.removeItem('phone');
        }
}
