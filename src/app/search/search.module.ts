import { NgModule } from '@angular/core';
import { SearchComponent }   from './search.component';
import { SearchService }   from './search.service';
import { URLSearchParams,Jsonp } from '@angular/http';

@NgModule({
    imports: [SearchComponent],
    exports: [SearchComponent],
    declarations: [SearchComponent],
    providers: [SearchService, Jsonp],
})
export class SearchModule { }
