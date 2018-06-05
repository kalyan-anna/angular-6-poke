import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonGalleryComponent } from './pokemon-gallery.component';

describe('PokemonGalleryComponent', () => {
  let component: PokemonGalleryComponent;
  let fixture: ComponentFixture<PokemonGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should sort the pokemons by number', () => {

  });

  it('should search and display pokemons with matching string', () => {

  });

  it('should display no result if no matching pokemon found', () => {

  });
});
