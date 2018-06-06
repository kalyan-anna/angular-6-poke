import {TestBed, inject} from '@angular/core/testing';

import {PokeApiService} from './poke-api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('PokeApiService', () => {
  let httpMock: HttpTestingController, pokeApiService: PokeApiService;

  const sampleResponse = {
    'count': 949,
    'previous': null,
    'results': [{
      'url': 'https:\/\/pokeapi.co\/api\/v2\/pokemon\/1\/',
      'name': 'bulbasaur'
    }, {
      'url': 'https:\/\/pokeapi.co\/api\/v2\/pokemon\/2\/',
      'name': 'ivysaur'
    }, {
      'url': 'https:\/\/pokeapi.co\/api\/v2\/pokemon\/3\/',
      'name': 'venusaur'
    }, {
      'url': 'https:\/\/pokeapi.co\/api\/v2\/pokemon\/4\/',
      'name': 'charmander'
    }, {
      'url': 'https:\/\/pokeapi.co\/api\/v2\/pokemon\/5\/',
      'name': 'charmeleon'
    }, {
      'url': 'https:\/\/pokeapi.co\/api\/v2\/pokemon\/6\/',
      'name': 'charizard'
    }, {
      'url': 'https:\/\/pokeapi.co\/api\/v2\/pokemon\/7\/',
      'name': 'squirtle'
    }, {
      'url': 'https:\/\/pokeapi.co\/api\/v2\/pokemon\/8\/',
      'name': 'wartortle'
    }, {
      'url': 'https:\/\/pokeapi.co\/api\/v2\/pokemon\/9\/',
      'name': 'blastoise'
    }, {
      'url': 'https:\/\/pokeapi.co\/api\/v2\/pokemon\/10\/',
      'name': 'caterpie'
    }],
    'next': 'https:\/\/pokeapi.co\/api\/v2\/pokemon\/?limit=151&offset=151'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PokeApiService]
    });
    httpMock = TestBed.get(HttpTestingController);
    pokeApiService = TestBed.get(PokeApiService);
  });

  it('should be created', inject([PokeApiService], (service: PokeApiService) => {
    expect(service).toBeTruthy();
  }));

  xdescribe('search for name', () => {
    it('should convert the http json response into array of pokemon', () => {
      pokeApiService.search().subscribe(pokes => {
        expect(pokes.length).toBe(10);
        expect(pokes[0].name).toBe('bulbasaur');
        expect(pokes[0].index).toBe(1);
        expect(pokes[0].url).toBe('https://pokeapi.co/api/v2/pokemon/1/');
      });
      httpMock.expectOne('https://pokeapi.co/api/v2/pokemon/?limit=151').flush(sampleResponse);
      httpMock.verify();
    });

    it('should return matching pokemon', () => {

    });

    it('should return all pokemon if search string is empty or null', () => {

    });

    it('should sort the result by pokemon number', () => {

    });
  });

  xdescribe('performance', () => {
    it('should cache the response from api', () => {

    });
  });
});
