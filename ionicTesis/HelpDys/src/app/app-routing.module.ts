import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  { path: 'registros', loadChildren: './pages/registros/registros.module#RegistrosPageModule' },
  { path: 'registroProfesor', loadChildren: './pages/registro-profesor/registro-profesor.module#RegistroProfesorPageModule' },
  { path: 'registroEstudiante', loadChildren: './pages/registro-estudiante/registro-estudiante.module#RegistroEstudiantePageModule' },
  {
    path: 'account',
    loadChildren: './pages/account/account.module#AccountModule'
  },
  {
    path: 'support',
    loadChildren: './pages/support/support.module#SupportModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginModule'
  },
  {
    path: 'signup',
    loadChildren: './pages/signup/signup.module#SignUpModule'
  },
  {
    path: 'app',
    loadChildren: './pages/tabs-page/tabs-page.module#TabsModule'
  },
  {
    path: 'tutorial',
    loadChildren: './pages/tutorial/tutorial.module#TutorialModule'
  },
  { path: 'servicios1', loadChildren: './pages/servicios1/servicios1.module#Servicios1PageModule' },

  { path: 'est', loadChildren: './pages/tabs-estudiante/tabs-estudiante.module#TabsEstudiantePageModule' },
  { path: 'rec', loadChildren: './pages/tabs-contenido/tabs-contenido.module#TabsContenidoPageModule' },

  { path: 'jue', loadChildren: './pages/tabs-juegos/tabs-juegos.module#TabsJuegosPageModule' },
  { path: 'cuentos', loadChildren: './pages/cuentos/cuentos/cuentos.module#CuentosPageModule' },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
