import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-usuario',
  templateUrl: './menu-usuario.component.html',
  styleUrls: ['./menu-usuario.component.css']
})
export class MenuUsuarioComponent implements OnInit {

  constructor() { }

  regresar(){
    document.location.assign('/login')
  }
  
  ngOnInit(): void {
  }

}
