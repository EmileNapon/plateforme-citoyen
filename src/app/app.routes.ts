import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { InscriptionComponent } from './component/auth/inscription/inscription.component';
import { Home1Component } from './component/home1/home1.component';
import { ConnexionComponent } from './component/auth/connexion/connexion.component';

export const routes: Routes = [
    { path: '', component: Home1Component },
    { path: 'register', component: InscriptionComponent },
    { path: 'connexion', component: ConnexionComponent },
];
