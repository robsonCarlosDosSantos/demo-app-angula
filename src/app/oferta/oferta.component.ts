import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { OfertaModel } from '../shared/oferta.model';
import { CarrinhoService } from '../carrinho.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: OfertaModel;
  public img: any;

  constructor(
    private route: ActivatedRoute,
    private service: OfertasService,
    private carrinhoService: CarrinhoService
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe((param: Params) => {
      this.service.getOfertasPorId(param.id).then( oferta => {
        this.oferta = oferta;
        this.img = oferta.imagens[0];
      });
    });
  }

  public adicionarItemCarrinho(): void {
    this.carrinhoService.adicionarItem(this.oferta);
  }

}
