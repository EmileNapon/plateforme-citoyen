import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component'; // Vérifiez le chemin
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // styleUrl → styleUrls (convention Angular)
})
export class AppComponent {
  title = 'PlateformeIntegre';
}