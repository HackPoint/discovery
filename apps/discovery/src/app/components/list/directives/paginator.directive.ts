import { Directive, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Directive({
  selector: '[discoveryPaginator]',
  exportAs: 'discoveryPaginator'
})
export class PaginatorDirective implements OnInit {
  @Input() page = 1;
  @Input() pageSize = 5;
  @Input() totalElements = 5;
  totalPages: number;

  constructor() {
  }


  ngOnInit(): void {
    this.totalPages = Math.ceil(this.totalElements / this.pageSize);

  }


  get isLast(): boolean {
    return this.page === this.totalPages;
  }

  get isFirst(): boolean {
    return this.page === 1;
  }

  first() {
    this.setPage(1);
  }

  prev(event) {
    event.preventDefault();
    this.setPage(Math.max(1, this.page - 1));
  }

  next(event) {
    event.preventDefault();
    this.setPage(Math.min(this.totalPages, this.page + 1));
  }

  last() {
    this.setPage(this.totalPages);
  }

  private setPage(input: number) {
    this.page = input;
  }

}
