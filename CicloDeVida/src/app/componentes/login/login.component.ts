import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public usuario: Usuario;
  public guardado: boolean;

  constructor() {
    this.usuario = new Usuario();
    this.guardado = false;
  }

  ngOnInit() {
  }

  guardar() {
    this.guardado = true;
    console.info("el objeto",this.usuario)
  }

}
