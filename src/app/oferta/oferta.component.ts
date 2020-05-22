import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { OfertaModel } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: OfertaModel;
  public img: any;

  constructor(private route: ActivatedRoute, private service: OfertasService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.service.getOfertasPorId(id).then( oferta => {
      this.oferta = oferta;
      this.img = oferta.imagens[0];
    });
  }

}
