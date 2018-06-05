import { Component, OnInit } from '@angular/core';
import {PokeApiService} from '../../services/poke-api.service';
import {Pokemon} from '../../models/pokemon';

@Component({
  selector: 'pokemon-gallery',
  templateUrl: './pokemon-gallery.component.html',
  styleUrls: ['./pokemon-gallery.component.scss']
})
export class PokemonGalleryComponent implements OnInit {
  pokemons: Pokemon[];

  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit() {
    this.pokeApiService.search('')
                      .subscribe(pokemons => this.pokemons = pokemons);
  }
}
