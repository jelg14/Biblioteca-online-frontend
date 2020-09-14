import { Component, Input, OnInit } from '@angular/core';

import { Usuario } from "./usuario.model";

@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent  {

  carnet = '';
  nombre = '';
  apellido = '';
  rol = '';
  psw = '';

usuarios: Usuario[] = [
    new Usuario('2020001', 'Luis',' Garcia', 'estudiante', 'asdfg', '1'),
    new Usuario('2020002', 'Alex', 'Ramirez', 'estudiante', '123jkl', '2')
  ];

  on() {
    document.getElementById("module").style.display="block";
  }
  of() {
    document.getElementById("module").style.display="none";
  }
  quitarF(i){
    var f=document.getElementsByTagName("form")[i+1].style.display = "none";
  }

  eliminar(i){
    this.usuarios.splice(i, 1);
  }

  agregar(){
    if(this.nombre.length != 0 && this.nombre.trim() && this.carnet.length != 0
    && this.carnet.trim() && this.apellido.length != 0 && this.apellido.trim()
    && this.rol.length != 0 && this.rol.trim() && this.psw.length!=0 && this.psw.trim()){
      var min = this.rol.toLowerCase();
      if (min == 'alumno' || min == 'profesor'){
        // console.log(this.nombre + "/" + this.apellido);
        var n = Math.floor(Math.random() * ( 1000 - 1) + 1);
        var i = n.toString();
        this.usuarios.push({id:i, carnet: this.carnet, nombre: this.nombre, apellido: this.apellido, rol: min, password: this.psw}); 
        this.carnet = '';
        this.nombre = '';
        this.apellido = '';
        this.rol = '';
        this.psw = '';
        document.getElementById("module").style.display="none";
        
      }else{
        alert("Solamente puede Ingresar los roles de 'alumno' o 'profesor' ")
      }
    }else{
       alert("No puede ingresar campos vacios");
    }
  }


  editar(i){
    document.getElementsByTagName("form")[i+1].style.display = "block";
    this.carnet = this.usuarios[i].carnet;
    this.nombre = this.usuarios[i].nombre;
    this.apellido = this.usuarios[i].apellido;
    this.rol = this.usuarios[i].rol;
    this.psw = this.usuarios[i].password;

  }

  actualizar(i){
    if (this.nombre.length != 0 && this.nombre.trim() && this.carnet.length != 0
    && this.carnet.trim() && this.apellido.length != 0 && this.apellido.trim()
    && this.rol.length != 0 && this.rol.trim() && this.psw.length!=0 && this.psw.trim()) {
      var min = this.rol.toLowerCase();
      if (min == 'alumno' || min == 'profesor') {
        var a =this.nombre.toString();
        this.usuarios.splice(i, 1, {carnet: this.carnet, nombre: this.nombre, apellido: this.apellido, rol: min, password: this.psw});    
        document.getElementsByTagName("form")[i+1].style.display = "none";
      }
    }else{
      alert("No puede ingresar campos vacios");
    }
    
  }

  constructor() { }
}
