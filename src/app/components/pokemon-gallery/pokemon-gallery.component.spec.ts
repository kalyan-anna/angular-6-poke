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
});
