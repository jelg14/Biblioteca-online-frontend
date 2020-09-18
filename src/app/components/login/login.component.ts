import { Component } from '@angular/core';
import {FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  UsuarioAdministrador = new FormGroup({
    usuario: new FormControl( "", Validators.required ),
    password: new FormControl( "", [Validators.required, Validators.minLength(5)])
  });

  constructor(){
  }

  validarDatos(){
    if(this.UsuarioAdministrador.valid== true && this.UsuarioAdministrador.value.usuario === "admin" && this.UsuarioAdministrador.value.password === "admin"){
      document.location.assign('/menuAdministrador');
      this.UsuarioAdministrador.value.usuario = '';
      this.UsuarioAdministrador.value.password = '';
    }else if(this.UsuarioAdministrador.valid == true && this.UsuarioAdministrador.value.usuario === "Juan" || this.UsuarioAdministrador.value.password === "asdfg"){
      document.location.assign('/menuUsuario');
      this.UsuarioAdministrador.value.usuario = '';
      this.UsuarioAdministrador.value.password = '';
    }else if(this.UsuarioAdministrador.value.usuario == '' && this.UsuarioAdministrador.value.password == ''){
      alert("No puede ingresar campos vacios");
    }else{
      alert("ERROR: El usuario que ingreso no existe, ponerse en contacto con el administrador para solicitar su registro");
    }
  }

  regresar(){
    document.location.assign(' ');
  }

}
