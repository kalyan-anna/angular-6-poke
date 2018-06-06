import { Injectable } from '@angular/core';
import {Pokemon} from '../models/pokemon';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private cache$: Observable<Pokemon[]>;
  private apiEndpoint = 'https://pokeapi.co/api/v2/pokemon/?limit=151';

  constructor(private http: HttpClient) { }

  private load(): Observable<Pokemon[]> {
    if (!this.cache$) {
      this.cache$ = this.http.get(this.apiEndpoint)
                            .pipe(
                              map((response: any) => response.results),
                              map(results => {
                                let index = 0;
                                return results.map(poke => Pokemon.fromResponse(poke, ++index));
                              }),
                              shareReplay(1)
                            );
    }
    return this.cache$;
  }

  public search(text: string = ''): Observable<Pokemon[]> {
    return this.load()
              .pipe(
                map((pokemons: Pokemon[]) => this.filterPokemon(pokemons, text))
              );
  }

  private filterPokemon(pokemons: Pokemon[], text: string): Pokemon[] {
    if (!text) {
      return pokemons;
    }
    return pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(text.toLowerCase()));
  }
}
