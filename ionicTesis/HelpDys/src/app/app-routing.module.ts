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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
