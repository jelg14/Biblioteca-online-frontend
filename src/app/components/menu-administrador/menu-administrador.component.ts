import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {
   
  constructor() { }

  ngOnInit(): void {
  }

  regresar(){
    document.location.assign('/login')
  }



}
