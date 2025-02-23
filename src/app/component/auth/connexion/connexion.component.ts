import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../services/service/service.service';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-connexion',
  
    templateUrl: './connexion.component.html',
    styleUrls: ['./connexion.component.css'],
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule, RouterLink]
})
export class ConnexionComponent implements OnInit {
  registrationForm!: FormGroup;
  nom: any;
  errorMessage: string | null = null; // Stocker le message d'erreur
  isLoading: boolean = false; // Pour afficher un indicateur de chargement

  constructor(private authService: AuthService, private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(): void {
    if (this.registrationForm.invalid) {
      return; // Si le formulaire est invalide, arrêter ici
    }

    const { email, password } = this.registrationForm.value;
    this.isLoading = true; // Activer l'indicateur de chargement

    this.authService.login(email, password).subscribe({
      next: (response) => {
        console.log('Login successful', response);
        // Stocker les tokens
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);

        // Stocker les informations utilisateur (nom, prénom, etc.)
        localStorage.setItem('user_first_name', response.firstName);
        localStorage.setItem('user_last_name', response.lastName);
         console.log("gggggggggggggg",response.role,"mmm", response.is_superuser)
        // Rediriger en fonction du rôle de l'utilisateur
        if (response.role === 'citizen') {
          this.router.navigate(['/dashboard-citizen']);
        } 
        else if (response.role === 'autority') {
          this.router.navigate(['/dashboard-autority']);
        }
        else if (response.role === 'supplier') {
          this.router.navigate(['/dashboard-supplier']);
        }

      },
      error: (error) => {
        console.error('Error logging in:', error);
        this.errorMessage = 'Email ou mot de passe incorrect. Veuillez réessayer.'; // Afficher un message d'erreur
        this.isLoading = false; // Désactiver l'indicateur de chargement
      },
      complete: () => {
        this.isLoading = false; // Désactiver l'indicateur de chargement
      }
    });
  }
}
