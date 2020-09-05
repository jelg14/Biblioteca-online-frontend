import { Component } from '@angular/core';
import {NgForm,FormGroup, Validators, FormControl} from "@angular/forms";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  UsuarioAdministrador = new FormGroup({
    usuario: new FormControl( "", [Validators.required, Validators.minLength(5)]),
    password: new FormControl( "", [Validators.required, Validators.minLength(5)])
  });

  constructor(){
  }

  validarDatos(){
    if(this.UsuarioAdministrador.valid== true && this.UsuarioAdministrador.value.usuario == "admin" && this.UsuarioAdministrador.value.password == "admin"){
      console.log("Bienvenido "+this.UsuarioAdministrador.value.usuario);
      document.location.assign('/menuAdministrador');

    }else if(this.UsuarioAdministrador.value.usuario != "admin" || this.UsuarioAdministrador.value.password != "admin"){
      console.log("El usuario o la contraseña no son de un administrador");
      alert("ERROR: Datos erroneos")
    }
  }

}
