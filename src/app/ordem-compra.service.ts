import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PedidoModel } from '../app/shared/pedido.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class OrdemCompraService {

    private URL_API = 'http://localhost:3000';

    constructor(private http: HttpClient){}

    public efetivarCompra(pedido: PedidoModel): Observable<number> {
        const headers: HttpHeaders = new HttpHeaders();
        headers.append('Content-type', 'application/json');
        const options = { headers };

        return this.http.post(`${this.URL_API}/pedidos`, pedido, options)
        .pipe(map((resposta: any) => resposta.id));
    }

}
