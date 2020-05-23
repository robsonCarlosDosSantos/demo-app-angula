import { Component, OnInit, OnDestroy } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs';
import { OfertaModel } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit, OnDestroy {

  public ofertas: Observable<OfertaModel[]>;

  constructor(private service: OfertasService) { }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {

  }

  public buscaOferta(busca: string): void {
    this.ofertas = this.service.getBuscaOferta(busca);
    this.ofertas.subscribe(
      resposta => console.log(resposta),
      error => console.log(error.message),
      () => console.log('busca completa')
    );
  }

}
