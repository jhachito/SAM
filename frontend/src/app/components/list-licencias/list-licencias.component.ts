import { Component, OnInit, HostBinding } from '@angular/core';
import { LicenciasService } from '../../services/licencias.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-list-licencias',
  templateUrl: './list-licencias.component.html',
  styleUrls: ['./list-licencias.component.css']
})
export class ListLicenciasComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  public tittle: string;
  lis: any = [];
  constructor(private licenciaService: LicenciasService) { 
        this.tittle='Listado de Licencias';
  }
  ngOnInit() {
    this.licenciaService.getLicencias().subscribe(
      res => {
        this.lis = res;
      },
      err => {
        return console.log(err);
      }
    )
  }
}
