import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import { AuthService, AppGlobals } from 'angular2-google-login';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent implements OnInit {
  title = 'app';
  imageURL: string;
  email: string;
  name: string;
  token: string;
  phone: string;
  gender: any;
  constructor(private auth: AuthService,  private zone: NgZone, private router: Router) {

    }
    ngOnInit() {

  AppGlobals.GOOGLE_CLIENT_ID = '273076167636-5ftmoha0p96s09ddqpioro0gb1sstdh8';
  this.getData();
      setTimeout(() => { this.googleAuthenticate() }, 50);
  console.log('onInIt');

    }
   googleAuthenticate() {
      this.auth.authenticateUser((result) => {
        this.zone.run(() => {
          console.log('hii result');
          console.log(this.getData());
          this.getData();
          this.router.navigate(['dash']);
        });
      });
    }

      getData() {
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
    }

     clearLocalStorage() {
      localStorage.removeItem('token');
      localStorage.removeItem('image');
      localStorage.removeItem('name');
      localStorage.removeItem('email');
        localStorage.removeItem('phone');
    }
  }
