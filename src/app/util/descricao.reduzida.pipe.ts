import { Pipe, PipeTransform} from '@angular/core';

@Pipe( {
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform{
    transform(descricao: string, truncarEm: number = 15) {
        if (descricao.length > truncarEm) {
            return descricao.substr(0, truncarEm) + '...';
        }
        return descricao;
    }
}
