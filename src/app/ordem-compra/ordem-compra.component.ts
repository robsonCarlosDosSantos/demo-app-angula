import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { PedidoModel } from '../shared/pedido.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [OrdemCompraService]
})
export class OrdemCompraComponent implements OnInit {

  public idPedido: number;

  public formulario: FormGroup = new FormGroup({
    endereco: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    numero: new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(20)]),
    complemento: new FormControl(null),
    tipoPagamento: new FormControl(null, Validators.required)
  });

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit() {
  }

  public confirmarCompra(): void {
    if (this.formulario.status === 'INVALID') {
      this.formulario.get('endereco').markAsTouched();
      this.formulario.get('numero').markAsTouched();
      this.formulario.get('complemento').markAsTouched();
      this.formulario.get('tipoPagamento').markAsTouched();
    } else {
      let pedido: PedidoModel = new PedidoModel(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.tipoPagamento
      )
      this.ordemCompraService.efetivarCompra(pedido)
        .subscribe((idPedido: number) => {
          this.idPedido = idPedido;
        });
    }
  }
}
