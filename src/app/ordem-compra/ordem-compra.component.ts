import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco: string = '';
  public numero: string = '';
  public complemento: string = '';
  public tipoPagamento: string = '';

  //controladores de validacao de campos
  public isEndereco: boolean;
  public isNumero: boolean;
  public isComplemento: boolean;
  public isTipoPagamento: boolean;

  //estado primitivos dos campos
  public isEnderecoPrimitivo: boolean = true;
  public isNumeroPrimitivo: boolean = true;
  public isComplementoPrimitivo: boolean = true;
  public isTipoPagamentoPrimitivo: boolean = true;

  //habilita o estado do botao
  public isFormValid: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  public getEndereco(inputEndereco: string): void {
    this.isEnderecoPrimitivo = false;
    this.endereco = inputEndereco;
    if (this.endereco.trim() !== '' && this.endereco.length > 3){
      this.isEndereco = true;
    } else {
      this.isEndereco = false;
    }
    this.validaForm();
  }

  public getNumero(inputNumero: string): void {
    this.isNumeroPrimitivo = false;
    this.numero = inputNumero;
    if (this.numero.trim() !== ''){
      this.isNumero = true;
    } else {
      this.isNumero = false;
    }
    this.validaForm();
  }

  public getComplemento(inputComplemento: string): void {
    this.isComplementoPrimitivo = false;
    this.complemento = inputComplemento;
    if (this.complemento.trim() !== ''){
      this.isComplemento = true;
    } else {
      this.isComplemento = false;
    }
    this.validaForm();
  }

  public getTipoPagamento(inputTipoPagamento: string): void {
    this.isTipoPagamentoPrimitivo = false;
    this.tipoPagamento = inputTipoPagamento;
    if (this.tipoPagamento !== ''){
      this.isTipoPagamento = true;
    } else {
      this.isTipoPagamento = false;
    }
    this.validaForm();
  }

  public validaForm(): void {
    if (this.isEndereco === true && this.isNumero === true && this.isTipoPagamento === true) {
      this.isFormValid = false;
    } else {
      this.isFormValid = true;
    }
  }



}
