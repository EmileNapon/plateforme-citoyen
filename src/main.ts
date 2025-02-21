import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

const routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // Route par défaut
  { path: '**', redirectTo: '/home' }, // Route wildcard (404)
];

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
