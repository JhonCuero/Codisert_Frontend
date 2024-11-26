import { Routes } from '@angular/router';
import { Index1Component } from './Registro/index-1/index-1.component';
import { Index2Component } from './Registro/index-2/index-2.component';

export const routes: Routes = [
    { path: '', component: Index1Component},
    { path: 'index', component: Index2Component}
];
