import { NgModule, ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';
import { SearchComponent } from './search/search.component';

const appRoutes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    { path: 'search', component: SearchComponent },
    { path: 'event', component: EventComponent}
];

export const appRoutingProviders: any[] = [
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule { };

export const routingComponents = [AboutComponent, EventComponent, SearchComponent];