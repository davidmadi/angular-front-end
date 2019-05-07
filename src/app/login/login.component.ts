import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from './usuario';
import { AuthService } from './auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  authentication() {

  }

  clicked() {
//    this.router.navigate(['/', 'red-pill']).then(nav => {
//        console.log(nav); // true if navigation is successful
//      }, err => {
//        console.log(err) // when there's an error
//      });
  }

  redirect() {

  }

  fazerLogin () {
    this.authService.fazerLogin(this.usuario);
  }
}
