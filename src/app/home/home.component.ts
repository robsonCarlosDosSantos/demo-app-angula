import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { OfertaModel } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas: Array<OfertaModel>;

  constructor(private service: OfertasService) { }

  ngOnInit(): void {
    this.service.getOfertas().then((ofertas: OfertaModel[]) => {
      this.ofertas = ofertas;
    }).catch(err => {
      console.log(err);
    });
  }

}
