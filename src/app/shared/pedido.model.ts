export class PedidoModel {
    constructor(
        public endereco: string,
        public numero: string,
        public complemento: string,
        public tipoPagamento: string
    ){}
}
