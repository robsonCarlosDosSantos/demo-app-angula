import { Component, OnInit } from '@angular/core';
import { OfertaModel } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertasService ]
})
export class DiversaoComponent implements OnInit {

  public ofertas: OfertaModel[];

  constructor(private service: OfertasService) { }

  ngOnInit(): void {
    this.service.getOfertasPorCategoria('diversao')
    .then((diversaos) => {
        this.ofertas = diversaos;
    });
  }

}
