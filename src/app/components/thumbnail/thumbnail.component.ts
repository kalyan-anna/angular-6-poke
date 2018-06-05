import { Component } from '@angular/core';
import {Input} from '@angular/core';
import {Pokemon} from '../../';
import {WindowRefService} from '../../services/window-ref.service';

@Component({
  selector: 'pokemon-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.scss']
})
export class ThumbnailComponent {
  @Input() pokemon: Pokemon;

  constructor(private window: WindowRefService) {
  }

  onClick() {
    this.window.openNewTab(this.pokemon.url);
  }
}
