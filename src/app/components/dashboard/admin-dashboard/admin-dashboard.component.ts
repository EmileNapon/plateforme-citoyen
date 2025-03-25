import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Project } from '../../../models/projet/projet.model';
import { CommonModule } from '@angular/common';
import { ListAutoriteComponent } from '../../utilisateurs/autorites/list-autorites/list-authorite.component';
import { ListPrestataireComponent } from '../../utilisateurs/prestataires/list-prestataire/list-prestataire.component';
import { ListCitoyenComponent } from '../../utilisateurs/citoyens/list-citoyen/list-citoyen.component';

@Component({
  selector: 'app-autorite-dashboard',
  imports: [ReactiveFormsModule, CommonModule, ListAutoriteComponent, ListPrestataireComponent,ListCitoyenComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css',
  standalone:true
})
export class AdminDashboardComponent implements OnInit{
  autoritevisible: boolean=false
  prestatairesVisible: boolean=false
  citoyenVisible: boolean=false
  projetVisible: boolean=false
  avisVisible: boolean=false
constructor(){}

ngOnInit(): void {
    
}

ngAutoriteVisible():void {
 this.autoritevisible=true
 this.prestatairesVisible=false
 this.citoyenVisible=false
 this.projetVisible=false
 this.avisVisible=false

}
ngPrestatairesVisible():void {
  this.autoritevisible=false
  this.prestatairesVisible=true
  this.citoyenVisible=false
  this.projetVisible=false
  this.avisVisible=false
 
 }

 ngCitoyenVisible():void {
  this.autoritevisible=false
  this.prestatairesVisible=false
  this.citoyenVisible=true
  this.projetVisible=false
  this.avisVisible=false
 
 }

 ngProjetVisible():void {
  this.autoritevisible=false
  this.prestatairesVisible=false
  this.citoyenVisible=false
  this.projetVisible=true
  this.avisVisible=false
 
 }

 ngAvisVisible():void {
  this.autoritevisible=false
  this.prestatairesVisible=false
  this.citoyenVisible=false
  this.projetVisible=false
  this.avisVisible=true
 
 }

}
