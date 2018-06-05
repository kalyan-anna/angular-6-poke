import {Component, OnInit} from '@angular/core';
import {PokeApiService} from '../../';
import {Pokemon} from '../../';
import { finalize, map } from 'rxjs/operators';
import {Subscription} from 'rxjs';

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
  searchText: string = '';
  pokeApiSubscription: Subscription;

  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit() {
    this.refreshPokemons();
  }

  private refreshPokemons() {
    this.isLoadingData = true;
    this.currentPage = 1;
    if (this.pokeApiSubscription) {
      this.pokeApiSubscription.unsubscribe();
    }
    this.pokeApiSubscription = this.pokeApiService.search(this.searchText)
                                            .pipe(
                                              map(pokemons => this.sortByNumber(pokemons)),
                                              finalize(() => this.isLoadingData = false)
                                            )
                                            .subscribe(pokemons => this.pokemons = pokemons);
  }

  private sortByNumber(pokemons: Pokemon[]): Pokemon[] {
    return pokemons.sort((a: Pokemon, b: Pokemon) => a.index - b.index);
  }

  get paginatedList(): Pokemon[] {
    const start = (this.currentPage * this.pageSize) - this.pageSize;
    const end = this.currentPage * this.pageSize;
    return this.pokemons.slice(start, end);
  }

  onSearch(text: string) {
    this.searchText = text;
    this.refreshPokemons();
  }
}
