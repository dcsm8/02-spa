import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: Heroe;
  @Input() index: number;

  constructor(private router: Router) {}

  ngOnInit() {}

  verHeroe() {
    this.router.navigate(['/heroe', this.index]);
  }
}
