import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
  public searchValue: String
  constructor(private searchService: SearchService) {  }

  ngOnInit() {
  }

  public searchSubmit() {
    const val = {
      term: this.searchValue
    }
console.log(val)
    this.searchService.search(val)
  }

}
