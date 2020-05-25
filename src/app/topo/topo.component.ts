import { Component, OnInit, OnDestroy } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject, of } from 'rxjs';
import { OfertaModel } from '../shared/oferta.model';
import { switchMap, debounceTime, distinctUntilChanged, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit, OnDestroy {

  public ofertas: Observable<OfertaModel[]>;
  public buscaSubject: Subject<string> = new Subject<string>();

  constructor(private service: OfertasService) { }

  ngOnInit(): void {
    this.ofertas = this.buscaSubject
      .pipe(debounceTime(1000))
      .pipe(distinctUntilChanged())
      .pipe(switchMap((busca: string) => {
        if (busca.trim() === '') {
          return of<OfertaModel[]>([]);
        }
        return this.service.getBuscaOferta(busca);
      })).pipe(catchError((error: any) => {
        console.log(error);
        return of<OfertaModel[]>([]);
      }));
  }

  ngOnDestroy(): void {

  }

  public buscaOferta(busca: string): void {
    this.buscaSubject.next(busca);
  }

  public limparPesquisa(): void {
    this.buscaSubject.next('');
  }

}
