import { Pipe, PipeTransform} from '@angular/core';

@Pipe( {
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform{
    transform(descricao: string) {
        if (descricao.length > 15) {
            return descricao.substr(0, 15) + '...';
        }
        return descricao;
    }
}
