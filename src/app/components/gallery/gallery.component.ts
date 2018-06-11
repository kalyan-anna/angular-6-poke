import {Component, OnInit} from '@angular/core';
import {PokeApiService} from '../../';
import {Pokemon} from '../../';
import {map, catchError} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
  selector: 'pokemon-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  pokemon$: Observable<Pokemon[]>
  pageSize = 20;
  currentPage = 1;
  networkError = false;

  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit() {
    this.refreshPokemons('');
  }

  private refreshPokemons(searchText?: string) {
    this.currentPage = 1;
    this.networkError = false;
    this.pokemon$ = this.pokeApiService.search(searchText)
      .pipe(
        map(pokemons => this.sortByNumber(pokemons)),
        catchError(err => {
          this.networkError = true;
          return of([]);
        })
      );
  }

  private sortByNumber(pokemons: Pokemon[]): Pokemon[] {
    return pokemons.sort((a: Pokemon, b: Pokemon) => a.index - b.index);
  }

  paginatedList(pokemons: Pokemon[]): Pokemon[] {
    const start = (this.currentPage * this.pageSize) - this.pageSize;
    const end = this.currentPage * this.pageSize;
    return pokemons.slice(start, end);
  }

  onSearch(text: string) {
    this.refreshPokemons(text);
  }
}
