import { Component, OnInit } from '@angular/core';
import { LR } from "./libros-y-revistas.model";
@Component({
  selector: 'libros-y-revistas',
  templateUrl: './libros-y-revistas.component.html',
  styleUrls: ['./libros-y-revistas.component.css']
})
export class LibrosYRevistasComponent implements OnInit {


  constructor() { }
  titulo = '';
  autor = '';
  edicion = '';
  palabrasClave = [];
  descripcion = '';
  temas = [];
  copias = null;
  disponibles = null;
  ejemplares = null;


  lr: LR[];

  on() {
    document.getElementById("module").style.display="block";
    this.titulo = '';
    this.autor = '';
    this.edicion = '';
    this.palabrasClave = [];
    this.descripcion = '';
    this.temas = [];
    this.copias = null;
    this.disponibles = null;
    this.ejemplares = null;
  }
  of() {
    document.getElementById("module").style.display="none";
  }

  mostrarTodo(){
    this.lr= this.getL();
  }

  getL(){
    const l = [
      new LR ('Historia de francia', 'Felipe Ruiz', '2001', ['historia', 'cultura', 'arte'], 'Libro acerca de la historia de francia', ['literatura'], 50, 50, '14100001', null, 'libro'),
      new LR ('Historia de Panama', 'Felipe Ruiz', '2001', ['historia', 'cultura', 'arte'], 'Libro acerca de la historia de Costa Rica', ['literatura'], 50, 50, '14', null, 'libro'),
      new LR ('Historia de Guatemala', 'Felipe Ruiz', '2001', ['historia', 'cultura', 'arte'], 'Libro acerca de la historia de Guatemala', ['literatura'], 50, 50, '35', null, 'libro'),
      new LR ('Los ojos en el espejo', 'José María Latorre', '1998', ['Terror', 'misterio', 'ojos', 'Latorre'], 'Investigacion de sucesos paranormales en un antiguo manicomio', ['literatura'], 50, 50, '60', null, 'libro'),
      new LR ('Larten Crepsley: Hermanos hasta la muerte', 'Darren Shan', '2008', ['historia', 'misterio', 'vampiros', 'Darren'], 'Libro final de la saga de Larten Crepsley', ['literatura'], 50, 50, '8', null, 'libro'),
      new LR ('Demonata: Lord Loss', 'Darren Shan', '2007', ['historia', 'cultura', 'arte'], 'Primer libro de la saga Demonata, los demonios pueden estar mas cerca de lo que crees', ['literatura'], 50, 50, '14100011', null, 'libro'),
      new LR ('Cuentos de navidad', 'Autores Varios', '2010', ['historia', 'cultura', 'arte'], 'Hermosos cuentos ideales para la epoca de navidad', ['literatura'], 50, 50, '145', null, 'libro'),
      new LR ('El conde de Montecristo', 'Alejandro Dumas', '1990', ['historia', 'cultura', 'arte'], 'Un hombre encarcelado injustamente durante 10 años, regresa para buscar venganza', ['literatura'], 50, 50, '1410', null, 'libro')
    ];
    return l;
  }

  onR(){
    document.getElementById("moduloRevista").style.display="block";
    this.titulo = '';
    this.autor = '';
    this.edicion = '';
    this.palabrasClave = [];
    this.descripcion = '';
    this.temas = [];
    this.copias = null;
    this.disponibles = null;
    this.ejemplares = null;
  }

  ofR(){
    document.getElementById("moduloRevista").style.display="none";
  }

  agregarL(){
    if (this.titulo.length !=0 && this.titulo.trim() && this.autor.length !=0 && this.autor.trim()
        && this.edicion.length !=0 && this.edicion.trim() && this.palabrasClave.length !=0 && 
        this.descripcion.length !=0 && this.descripcion.trim() && 
        this.temas.length !=0 && this.copias.toString().trim() &&  this.copias > 0 &&
        this.disponibles.toString().trim() && this.disponibles > 0) {
          var n = Math.floor(Math.random() * ( 1000 - 1) + 1);
          var i = n.toString()
          this.lr.push({tipo: 'libro', titulo: this.titulo, autor: this.autor, edicion: this.edicion,
          palabrasClave: this.palabrasClave, descripcion: this.descripcion, temas: this.temas, 
          copias: this.copias, disponibles: this.disponibles, id: i});
          document.getElementById("module").style.display="none";
        } else {
      alert('No puede ingresar campos vacios');
    }
  }

  agregarR(){
    if (this.titulo.length !=0 && this.titulo.trim() && this.autor.length !=0 && this.autor.trim()
    && this.edicion.length !=0 && this.edicion.trim() && this.palabrasClave.length !=0 && 
    this.descripcion.length !=0 && this.descripcion.trim() && 
    this.temas.length !=0 && this.copias.toString().trim() &&  this.copias > 0 &&
    this.disponibles.toString().trim() && this.disponibles > 0 && this.ejemplares.trim()) {
        var n = Math.floor(Math.random() * ( 1000 - 1) + 1);
        var i = n.toString()
        this.lr.push({tipo: 'revista', titulo: this.titulo, autor: this.autor, edicion: this.edicion,
        palabrasClave: this.palabrasClave, descripcion: this.descripcion, temas: this.temas,
        copias: this.copias, disponibles: this.disponibles, id: i, ejemplares: this.ejemplares});
      document.getElementById("moduloRevista").style.display="none";
    } else {
      alert('No puede ingresar campos vacios');
    }
  }  
  ofEd(i){
    document.getElementsByTagName('form')[i+2].style.display = "none";
  }
  editarOn(i){
    console.log(i);
    document.getElementsByTagName('form')[i+2].style.display = "block";
    this.titulo = this.lr[i].titulo;
    this.autor = this.lr[i].autor;
    this.edicion = this.lr[i].edicion;
    this.palabrasClave = this.lr[i].palabrasClave;
    this.descripcion = this.lr[i].descripcion;
    this.temas = this.lr[i].temas;
    this.copias = this.lr[i].copias;
    this.disponibles = this.lr[i].disponibles;
    if(this.lr[i].ejemplares != null){
      this.ejemplares = this.lr[i].ejemplares;
    }

  }

  actualizar(i){
    if ( this.titulo.trim() && this.autor.trim() && this.edicion.trim() &&
        this.palabrasClave.length !=0 && this.descripcion.trim() && this.temas.length != 0
        && this.copias.toString().trim() && this.copias > 0 && this.disponibles.toString().trim()){
          this.lr.splice(i, 1,{titulo: this.titulo, autor: this.autor, edicion: this.edicion,
            palabrasClave:this.palabrasClave, descripcion: this.descripcion, temas: this.temas,
            copias: this.copias, disponibles: this.disponibles})
          document.getElementsByTagName('form')[i+2].style.display = "none";
    }else{
      alert('no puede ingresar campos vacios');
    }
  }

  borrar(i){
    this.lr.splice(i, 1);
  }

  BuscarTitulo(t): LR[] {
    let l = this.getL();
    const filtro = l.filter(item => item.titulo.toLowerCase().includes(t));
    return filtro;
  }

   getTitulo(t): void {
    this.lr = this.BuscarTitulo(t);
  }

  BuscarPalabrasClave(p): LR[]{
    let l = this.getL();
    const filtro = l.filter(item => item.palabrasClave.includes(p));
    return filtro;
  }

  getPalabrasClave(p){
    this.lr = this.BuscarPalabrasClave(p);
  }

  onBuscarTitulo(){
    document.getElementById('BuscarTitulo').style.display = 'block';
    document.getElementById('BuscarPalabraClave').style.display= 'none';
  }

  onBuscarPalabraClave(){
    document.getElementById('BuscarPalabraClave').style.display= 'block';
    document.getElementById('BuscarTitulo').style.display= 'none';
  }

  regresar(){
    document.location.assign('menuAdministrador');
  }

  
  ngOnInit(): void {
  }

}
