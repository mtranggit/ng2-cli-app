import { NgModule } from '@angular/core';
import { SearchComponent }   from './search.component';
import { SearchService }   from './search.service';
import { URLSearchParams,Jsonp } from '@angular/http';

@NgModule({
    imports: [SearchComponent, SearchService],
    declarations: [SearchComponent, SearchService]
})
export class SearchModule { }
