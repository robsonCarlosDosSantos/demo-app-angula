import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import ItemCarrinhoModel from '../app/shared/item-carrinho.model';
import { OfertaModel } from './shared/oferta.model';

@Injectable()
class CarrinhoService {

    private itens: ItemCarrinhoModel[] = [];

    constructor(){}

    public exibirItens(): ItemCarrinhoModel[] {
        return this.itens;
    }

    public adicionarItem(oferta: OfertaModel): void {
        const item: ItemCarrinhoModel = new ItemCarrinhoModel(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricaoOferta,
            oferta.valor,
            1
        );
        const itemCarrinho = this.itens.find((req: ItemCarrinhoModel) => req.id === item.id);
        if (itemCarrinho) {
            itemCarrinho.quantidade += 1;
        } else {
            this.itens.push(item);
        }
    }

    public totalCarrinho(): number {
        let total: number = 0;
        this.itens.map((item: ItemCarrinhoModel) => {
            total += item.quantidade * item.valor;
        });
        return total;
    }

    public addItemCarrinho(item: ItemCarrinhoModel): void {
        const itemCarrinho = this.itens.find((req: ItemCarrinhoModel) => req.id === item.id);
        if (itemCarrinho) {
            itemCarrinho.quantidade += 1;
        }
    }

    public removeItemCarrinho(item: ItemCarrinhoModel): void {
        const itemCarrinho = this.itens.find((req: ItemCarrinhoModel) => req.id === item.id);
        if (itemCarrinho.quantidade > 1) {
            itemCarrinho.quantidade -= 1;
        } else {
            const index = this.itens.indexOf(itemCarrinho);
            if (index !== -1) {
                this.itens.splice(index, 1);
            }
        }
    }

    public limparCarrinho(): void {
        this.itens = [];
    }
}

export { CarrinhoService} ;
