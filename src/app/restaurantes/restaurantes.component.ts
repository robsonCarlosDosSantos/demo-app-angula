import { Component, OnInit } from '@angular/core';
import { OfertaModel } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  public ofertas: OfertaModel[];

  constructor(private service: OfertasService) { }

  ngOnInit(): void {
    this.service.getOfertasPorCategoria('restaurante')
    .then((restaurantes) => {
        this.ofertas = restaurantes;
    });
  }

}
