import {Component, OnInit} from '@angular/core';
import {PokeApiService} from '../../';
import {Pokemon} from '../../';
import { finalize, map, catchError } from 'rxjs/operators';
import {Subscription, throwError} from 'rxjs';

@Component({
  selector: 'pokemon-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  pokemons: Pokemon[];
  pageSize = 20;
  isLoadingData = true;
  currentPage = 1;
  searchText = '';
  pokeApiSubscription: Subscription;
  networkError = false;

  constructor(private pokeApiService: PokeApiService) {
  }

  ngOnInit() {
    this.refreshPokemons();
  }

  private refreshPokemons() {
    if (this.pokeApiSubscription) {
      this.pokeApiSubscription.unsubscribe();
    }
    this.isLoadingData = true;
    this.currentPage = 1;
    this.networkError = false;
    this.pokeApiSubscription = this.pokeApiService.search(this.searchText)
                                            .pipe(
                                              map(pokemons => this.sortByNumber(pokemons)),
                                              finalize(() => this.isLoadingData = false),
                                              catchError(err => {
                                                this.networkError = true;
                                                return throwError(err);
                                              })
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
