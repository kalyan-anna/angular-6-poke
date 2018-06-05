import {Component, OnInit} from '@angular/core';
import {PokeApiService} from '../../services/poke-api.service';
import {Pokemon} from '../../models/pokemon';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'pokemon-gallery',
  templateUrl: './pokemon-gallery.component.html',
  styleUrls: ['./pokemon-gallery.component.scss']
})
export class PokemonGalleryComponent implements OnInit {
  pokemons: Pokemon[];
  pageSize = 20;
  isLoadingData = true;
  currentPage: number = 1;

  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit() {
    this.loadData();
  }

  private loadData() {
    this.isLoadingData = true;
    this.pokeApiService.search('')
      .pipe(
        finalize(() => this.isLoadingData = false)
      )
      .subscribe(pokemons => this.pokemons = pokemons);
  }

  get pokemonList(): Pokemon[] {
    const start = (this.currentPage * this.pageSize) - this.pageSize;
    const end = this.currentPage * this.pageSize;
    return this.pokemons.slice(start, end);
  }
}
