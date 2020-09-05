import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent  {
  on() {
    document.getElementById("module").style.display="block";
  }
  of() {
    document.getElementById("module").style.display="none";
  }
  constructor() { }
}
