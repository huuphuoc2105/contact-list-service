import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-filter',
  template: `<input type="text" (input)="onSearch($event)" placeholder="Search...">`,
  styleUrls: ['./search-filter.component.css']
})
export class SearchFilterComponent {
  @Output() search = new EventEmitter<string>();

  onSearch(event: any) {
    const target = event.target as HTMLInputElement;
    this.search.emit(event.target.value);
  }
}
