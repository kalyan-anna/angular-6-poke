import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'pokemon-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnChanges {
  @Input() readonly pageSize: number;
  @Input() readonly length: number;
  @Output() page = new EventEmitter<number>();

  currentPage: number;
  startIndex: number;
  endIndex: number;
  isLastPage: boolean;

  ngOnChanges(changes: SimpleChanges): void {
    this.currentPage = 1;
    this.calculateCurrentIndex();
  }

  onButtonClick(type: string) {
    if (type === 'Prev') {
      this.currentPage--;
    } else if (type === 'Next') {
      this.currentPage++;
    }
    this.page.emit(this.currentPage);
    this.calculateCurrentIndex();
  }

  private calculateCurrentIndex() {
    this.startIndex = (this.currentPage * this.pageSize) - ( this.pageSize - 1);
    this.endIndex = this.currentPage * this.pageSize;
    if (this.endIndex > this.length) {
      this.endIndex = this.length;
    }
    this.isLastPage = this.endIndex >= this.length;
  }
}
