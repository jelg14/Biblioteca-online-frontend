import { Component, OnInit } from '@angular/core';
import { LR } from "../libros-y-revistas/libros-y-revistas.model";

@Component({
  selector: 'prestamo',
  templateUrl: './prestamo.component.html',
  styleUrls: ['./prestamo.component.css']
}) 
export class PrestamoComponent implements OnInit {
  lr: LR[];
  lim = 5;
  mostrarTodo(){
    this.lr = this.getL();
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

  constructor() { }

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

  prestarODevolverLibro(i){
    const b = document.getElementsByTagName('button')[i + 3];
    if (this.lim === 0 && b.innerText === 'Prestar') {
      alert('Ya alcanzo el limite de prestamos');
    }else {
      if (b.innerText === 'Prestar'){
        this.lim--;
        b.innerText = 'Devolver';
        b.style.backgroundColor = 'red';
        console.log(this.lim);
      }else{
        this.lim++;
        b.innerText = 'Prestar';
        b.style.backgroundColor = '#4CAF50';
        console.log(this.lim);
      }
    }
  }

  regresar(){
    document.location.assign('menuUsuario');
  }
  ngOnInit(): void {
  }

}
