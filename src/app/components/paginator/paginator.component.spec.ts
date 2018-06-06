import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xdescribe('count text', () => {
    it('should display initial range with total on load', () => {

    });

    it('should display current range with total on pagination', () => {

    });
  });

  xdescribe('previous', () => {
    it('should disable previous button when pagination is on first page', () => {

    });

    it('should emit current page number on clicking previous button', () => {

    });
  });

  xdescribe('next', () => {
    it('should disable next button when pagination is on last page', () => {

    });

    it('should emit current page number on clicking next button', () => {

    });
  });
});
