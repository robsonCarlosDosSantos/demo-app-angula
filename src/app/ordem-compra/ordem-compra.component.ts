import { Component, OnInit, ViewChild } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { NgForm } from '@angular/forms';
import { PedidoModel } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedido: number;

  @ViewChild('formulario') public dadosForm: NgForm;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
  }

  public confirmaPedido(): void {
    let pedido: PedidoModel = new PedidoModel(
      this.dadosForm.value.endereco,
      this.dadosForm.value.numero,
      this.dadosForm.value.complemeto,
      this.dadosForm.value.tipoPaamento
    );
    this.ordemCompraService.efetivarCompra(pedido)
    .subscribe((idPedido: number) => {
      this.idPedido = idPedido;
    });
  }
}
