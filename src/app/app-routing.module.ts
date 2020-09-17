import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BibliotecaComponent } from './components/biblioteca/biblioteca.component';
import { LoginComponent } from './components/login/login.component';
import { MenuAdministradorComponent } from './components/menu-administrador/menu-administrador.component';
import { MenuUsuarioComponent } from './components/menu-usuario/menu-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LibrosYRevistasComponent } from './components/libros-y-revistas/libros-y-revistas.component';
import {ReporteComponent} from './components/reporte/reporte.component';
import { PrestamoComponent } from "./components/prestamo/prestamo.component";

const routes: Routes = [
    {path: '', redirectTo: '/biblioteca', pathMatch: 'full'},
    {path: 'biblioteca', component: BibliotecaComponent},
    {path: 'login', component: LoginComponent},
    {path: 'menuAdministrador', component: MenuAdministradorComponent},
    {path: 'menuUsuario', component: MenuUsuarioComponent},
    {path: 'usuarios', component: UsuarioComponent},
    {path: 'librosYrevistas', component: LibrosYRevistasComponent},
    {path: 'reporte', component: ReporteComponent},
    {path: 'prestamo', component: PrestamoComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})


export class AppRoutingModule {}
