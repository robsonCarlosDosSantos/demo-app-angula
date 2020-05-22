import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../../ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css'],
  providers: [ OfertasService ]
})
export class OndeFicaComponent implements OnInit {

  public descricao: string = '';

  constructor(private router: ActivatedRoute, private service: OfertasService) { }

  ngOnInit(): void {
    const id = this.router.parent.snapshot.params['id'];
    this.service.getInfoOndeFicaPorId(id).then( descricao => {
        this.descricao = descricao;
    });
  }

}
