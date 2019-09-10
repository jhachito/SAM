import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ListLicenciasComponent } from './components/list-licencias/list-licencias.component';
import { FormLicenciasComponent } from './components/form-licencias/form-licencias.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'', redirectTo: '/about', pathMatch: 'full'},
  {path:'about', component: AboutComponent },
  {path:'licencias/add', component: FormLicenciasComponent },
  {path:'licencias', component: ListLicenciasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
