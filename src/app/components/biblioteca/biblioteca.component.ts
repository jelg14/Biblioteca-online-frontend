import { Component} from '@angular/core';

@Component({
  selector: 'biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css']
})
export class BibliotecaComponent {
  public titulo: string;
  
  constructor() { 
    this.titulo = "BIBLIOTECA";
  }

  on(){
    document.getElementById("module").style.display="block";
  }

  of(){
    document.getElementById("module").style.display="none";
  }

}
