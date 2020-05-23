import { OfertaModel } from './shared/oferta.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';

@Injectable()
export class OfertasService {

    private URL_API = 'http://localhost:3000';

    constructor(private http: HttpClient) { }

    public getOfertas(): Promise<OfertaModel[]> {
        return this.http.get(`${this.URL_API}/ofertas?destaque=true`)
        .toPromise().then((resp: any) => resp);
    }

    public getOfertasPorCategoria(categoria: string): Promise<Array<OfertaModel>> {
        return this.http.get(`${this.URL_API}/ofertas?categoria=${categoria}`)
        .toPromise().then((resp: any) => resp);
    }

    public getOfertasPorId(id: number): Promise<OfertaModel> {
        return this.http.get(`${this.URL_API}/ofertas?id=${id}`)
        .toPromise().then((resp: OfertaModel) => resp[0]);
    }

    public getInfoComoUsarPorId(id: number): Promise<string> {
        return this.http.get(`${this.URL_API}/como-usar?id=${id}`).toPromise().then((resp: any) => {
            return resp[0].descricao;
        });
    }

    public getInfoOndeFicaPorId(id: number): Promise<string> {
        return this.http.get(`${this.URL_API}/onde-fica?id=${id}`).toPromise().then((resp: any) => {
            return resp[0].descricao;
        });
    }

    public getBuscaOferta(busca: string): Observable<OfertaModel[]> {
        // _like particularidade do jsonserver, para fazer uma busca por aproximidade
        return this.http.get(`${this.URL_API}/ofertas?descricaoOferta_like=${busca}`)
        .pipe(retry(10))
        .pipe(map((val: OfertaModel[]) => val));
    }
}
