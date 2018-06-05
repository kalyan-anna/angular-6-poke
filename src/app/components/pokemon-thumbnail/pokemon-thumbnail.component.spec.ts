import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonThumbnailComponent } from './pokemon-thumbnail.component';

describe('PokemonThumbnailComponent', () => {
  let component: PokemonThumbnailComponent;
  let fixture: ComponentFixture<PokemonThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
