import { Component } from '@angular/core';
import {Input} from '@angular/core';
import {Pokemon} from '../../';
import {WindowRefService} from '../../services/window-ref.service';

@Component({
  selector: 'pokemon-thumbnail',
  templateUrl: './pokemon-thumbnail.component.html',
  styleUrls: ['./pokemon-thumbnail.component.scss']
})
export class PokemonThumbnailComponent {
  @Input() pokemon: Pokemon;

  constructor(private window: WindowRefService) {
  }

  onClick() {
    this.window.openNewTab(this.pokemon.url);
  }
}
