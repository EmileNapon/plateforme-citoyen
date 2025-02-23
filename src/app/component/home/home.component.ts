import { CommonModule, isPlatformBrowser } from '@angular/common';

import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarPrincipaleComponent } from '../utils/navbar-principale/navbar-principale.component';

@Component({
  selector: 'app-home',
  imports: [ CommonModule, NavbarPrincipaleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


}
