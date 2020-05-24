import { Component, OnInit, OnDestroy } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject, of } from 'rxjs';
import { OfertaModel } from '../shared/oferta.model';
import { switchMap, retry, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit, OnDestroy {

  public ofertas: Observable<OfertaModel[]>;
  public ofertas2: OfertaModel[];
  public buscaSubject: Subject<string> = new Subject<string>();

  constructor(private service: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.buscaSubject //buscaSubject atua tanto como observável como observador
    .pipe(debounceTime(1000)) //debounceTime espera 1 segundo da ultima tecla digitada para realiza a pesquisa
    .pipe(distinctUntilChanged()) //so faz uma nova busca, caso os termos da busca forem diferentes da ultima requisicao
    .pipe(switchMap((busca: string) => { //switchMap faz o enfileiramento de requisições.
      //retorna um array vazio
      if (busca.trim() === '') {
        return of<OfertaModel[]>([]); //cria um Observable do tipo que vc quer
      }
      //faz a busca
      return this.service.getBuscaOferta(busca);
    })).pipe(catchError((error: any) => { //adicionado uma tratatica de erro
      console.log(error);
      return of<OfertaModel[]>([]);
    }));

    //escrevendo o Observable
    this.ofertas.subscribe(
      (resposta: OfertaModel[]) => {
        this.ofertas2 = resposta;
      }, error => console.log(error),
        () => console.log('Busca completa'));
  }

  ngOnDestroy(): void {

  }

  public buscaOferta(busca: string): void {
      this.buscaSubject.next(busca);
  }

}
