import { Routes } from '@angular/router';

import { InscriptionComponent } from './component/auth/inscription/inscription.component';
import { HomeComponent } from './component/home/home.component';
import { ConnexionComponent } from './component/auth/connexion/connexion.component';
import { CitoyenDashboardComponent } from './component/dashboard/citoyen-dashboard/citoyen-dashboard.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'register', component: InscriptionComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'dashboard-citizen', component: CitoyenDashboardComponent },
    
];


