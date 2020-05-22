import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
    const id = this.router.parent.snapshot.params['id'];
    this.service.getInfoComoUsarPorId(id).then( descricao => {
      this.descricao = descricao;
    });
  }

}
