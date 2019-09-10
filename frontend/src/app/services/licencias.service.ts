import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Licencia } from '../models/model-licencias';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LicenciasService {

  API_URI = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { 
    
   }
   getLicencias(){
    return this.http.get(`${this.API_URI}/licencias`);
   }
   getLicencia(id:string){
    return this.http.get(`${this.API_URI}/licencias/${id}`);
   }
   saveLicencia(licencia: Licencia){
    return this.http.post(`${this.API_URI}/licencias`,licencia)
   }
   updateLicencia(id:string, updateLicencia: Licencia){
    return this.http.put(`${this.API_URI}/licencias/${id}`, updateLicencia);
   }
   deleteLicencia(id:string){
    return this.http.delete(`${this.API_URI}/licencias/${id}`);
   }
}
