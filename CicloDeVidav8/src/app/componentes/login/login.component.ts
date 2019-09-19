import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public logueado: boolean;

  constructor(private route: Router) {
    this.usuario = new Usuario();
    this.logueado = false;
  }

  ngOnInit() {
  }

  Loguear() {
    this.logueado = true;
    this.route.navigate(['usuario']);
  }

}
