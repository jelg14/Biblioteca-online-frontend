import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Component({
  selector: 'reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  regresar(){
    document.location.assign('menuAdministrador')
  }

  generarPDF(){
    let doc = new jsPDF();
    var columns = [["Usuario", "Cantidad de libros prestados"]];
    var data = [["Juan", "100"], ['Marcos', '50'], ['Arturo', '210'], ['Luis', '70']];
    var imagen= 'https://img.icons8.com/color/1600/doughnut-chart.png';
    doc.setFontSize(18);
    doc.text('Reporte de ventas ', 10, 10);
    doc.setFontSize(11);
    doc.setTextColor(100);
    doc.addImage(imagen,'PNG',25, 50,140,140);
    (doc as any).autoTable({
      head: columns,
      body: data,
      theme:'grid'
    });
    doc.output('dataurlnewwindow');
    // doc.save('ReportePrestamos.pdf');

  }

}
