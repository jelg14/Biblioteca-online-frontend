import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'libros-y-revistas',
  templateUrl: './libros-y-revistas.component.html',
  styleUrls: ['./libros-y-revistas.component.css']
})
export class LibrosYRevistasComponent implements OnInit {

  constructor() { }

  on() {
    document.getElementById("module").style.display="block";
  }
  of() {
    document.getElementById("module").style.display="none";
  }

  ngOnInit(): void {
  }

}
