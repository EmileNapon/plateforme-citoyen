import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/service/service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-principale',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar-principale.component.html',
  styleUrl: './navbar-principale.component.css'
})
export class NavbarPrincipaleComponent implements OnInit{
  userInfo: { email: string | null, firstName: string | null, lastName: string | null, profilePic: string | null } | null = null;
  isDropdownOpen: boolean = false;
constructor( private authService: AuthService,){}

ngOnInit(): void {
this.userInfo = this.authService.getUserInfo();
}

onLogout(): void {
  this.authService.logout();
}


showDropdown() {
  this.isDropdownOpen = true;
}

// Cache le menu de déconnexion
hideDropdown() {
  this.isDropdownOpen = false;
}

// Garder le menu ouvert si on survole le menu lui-même
keepDropdownOpen() {
  this.isDropdownOpen = true;
}

}
