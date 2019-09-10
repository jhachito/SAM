import { Component, OnInit, HostBinding, NgZone } from "@angular/core";
import { Licencia } from "../../models/model-licencias";
import { LicenciasService } from "../../services/licencias.service";

@Component({
  selector: "app-form-licencias",
  templateUrl: "./form-licencias.component.html",
  styleUrls: ["./form-licencias.component.css"]
})
export class FormLicenciasComponent implements OnInit {
  @HostBinding("class") classes = "row";
  tittle: string = "Ingreso de licencias";
  licencia: Licencia = {
    id: 0,
    name: "",
    version: "",
    stock: "",
    img: "",
    created_at: new Date()
  };

  constructor(
    private licenciasService: LicenciasService,
    private zone: NgZone
  ) {}

  lis: any = [];
  ngOnInit() {
    this.licenciasService.getLicencias().subscribe(
      res => {
        this.lis = res;
      },
      err => {
        return console.log(err);
      }
    );
  }

  saveNewLicencia() {
    if (this.licencia.name != "" && this.licencia.version != "") {
      delete this.licencia.id;
      delete this.licencia.created_at;
      parseInt(this.licencia.stock);
      if (confirm("mensaje")) {
        this.licenciasService.saveLicencia(this.licencia).subscribe(
          res => {
            alert("documento almacenado");
          },
          err => console.log(err)
        );
      }
    } else {
      alert("Campos requeridos");
    }
  }

  deleteRow(id) {
    for (let i = 0; i < this.lis.length; ++i) {
      if (this.lis[i].id === id) {
        this.lis.splice(i, 1);
      }
    }
  }
}
