import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormLicenciasComponent } from './components/form-licencias/form-licencias.component';
import { ListLicenciasComponent } from './components/list-licencias/list-licencias.component';
import { AboutComponent } from './components/about/about.component';
import { LicenciasService } from './services/licencias.service';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormLicenciasComponent,
    ListLicenciasComponent,
    AboutComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    LicenciasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
