import { Routes } from '@angular/router';

import { InscriptionComponent } from './component/auth/inscription/inscription.component';
import { HomeComponent } from './component/home/home.component';
import { ConnexionComponent } from './component/auth/connexion/connexion.component';
import { CitoyenDashboardComponent } from './component/dashboard/citoyen-dashboard/citoyen-dashboard.component';
import { AutoriteDashboardComponent } from './component/dashboard/autorite-dashboard/autorite-dashboard.component';
import { CreateProjetComponent } from './component/dashboard/autorite-dashboard/create-projet/create-projet.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'register', component: InscriptionComponent },
    { path: 'connexion', component: ConnexionComponent },
    { path: 'dashboard-citizen', component: CitoyenDashboardComponent },
    { path: 'dashboard-autority', component: AutoriteDashboardComponent }, 
    { path: 'plateforme-integre-projet-creation', component: CreateProjetComponent },
];


