import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  public descricao: string = '';

  constructor(private router: ActivatedRoute, private service: OfertasService) { }

  ngOnInit(): void {
    this.router.parent.params.subscribe((params: Params) => {
      this.service.getInfoComoUsarPorId(params.id).then( descricao => {
        this.descricao = descricao;
      });
    });
  }

}
