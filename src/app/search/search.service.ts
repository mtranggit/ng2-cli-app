import { Injectable } from '@angular/core';
import { URLSearchParams, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
// import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/switchMap';//subscribe and then unsubscribe

@Injectable()
export class SearchService {

    searchUrl: string =  "http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK";

    constructor(private jsonp: Jsonp) { }
    
    search(terms: Observable<string>, debounceMs = 400) {
        return terms.debounceTime(debounceMs)
                    .distinctUntilChanged()
                    .switchMap(term => this.rawSearch(term));
    }

    rawSearch(term: string) {
        let search = new URLSearchParams();
        search.set('action', 'opensearch');
        search.set('search', term);
        search.set('format', 'json');

        // return this.jsonp
        //             .get(this.searchUrl, { search })
        //             .map(req => req.json()[1]);
        
        let obs = this.jsonp
                    .get(this.searchUrl, { search })
                    .map(req => req.json()[1]);
        
        //simulate a result delay to deal with out of arrival of the order search result 
        // if (term.length === 2) {
        //     obs = obs.delay(2000);
        // }
        
        return obs;

    }
    
}