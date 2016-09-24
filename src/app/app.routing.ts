import { ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { EventComponent } from './event/event.component';

const appRoutes: Routes = [
    { path: '', component: EventComponent },
    { path: 'about', component: AboutComponent },
    { path: 'event', component: EventComponent}
];

export const appRoutingProviders: any[] = [
    
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);