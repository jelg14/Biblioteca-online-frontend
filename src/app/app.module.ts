import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuAdministradorComponent } from './components/menu-administrador/menu-administrador.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MenuUsuarioComponent } from './components/menu-usuario/menu-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LibrosYRevistasComponent } from './components/libros-y-revistas/libros-y-revistas.component';
import { ReporteComponent } from './components/reporte/reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    BibliotecaComponent,
    LoginComponent,
    MenuAdministradorComponent,
    MenuUsuarioComponent,
    UsuarioComponent,
    LibrosYRevistasComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
