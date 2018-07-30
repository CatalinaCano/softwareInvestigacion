import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NopagefoundComponent } from './components/shared/nopagefound/nopagefound.component';


const appRoutes: Routes = [
    {path : 'home', component: HomeComponent},
    {path : 'login', component: LoginComponent},
    {path : 'registrar', component: LoginComponent},
    {path : '', redirectTo: '/home', pathMatch: 'full'},
    {path : '**', component: NopagefoundComponent}
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});
