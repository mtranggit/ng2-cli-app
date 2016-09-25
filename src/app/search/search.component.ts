import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SearchService } from './search.service';

import { Subject } from 'rxjs/Subject';

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/debounceTime';
// import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/mergeMap';
// import 'rxjs/add/operator/switchMap';//subscribe and then unsubscribe

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // items: Observable<Array<string>>;
  items: Array<string>;
  term$ = new Subject<string>();
  
  constructor(private searchService: SearchService) { }

  // ngOnInit() {
  //   this.term$
  //       .debounceTime(400)
  //       .distinctUntilChanged()
  //       .subscribe( term => this.search(term));
  // }

  // search(term: string) {
  //   this.searchService.search(term)
  //       .subscribe(results => this.items = results);//subscribe 2
  // }
  
  ngOnInit() {

    this.searchService.search(this.term$)
                      .subscribe(results => this.items = results);

    // this.term$
    //     .debounceTime(400)
    //     .distinctUntilChanged()
    //     .map( term => this.searchService.search(term))
    //     .subscribe(obsResults => {
    //       obsResults.subscribe( results => this.items = results);
    //     });

    //Note that flatMap is an alias of mergeMap
    // this.term$
    //     .debounceTime(400)
    //     .distinctUntilChanged()
    //     .switchMap( term => this.searchService.search(term))
    //     .subscribe(results => this.items = results);
  }

}
