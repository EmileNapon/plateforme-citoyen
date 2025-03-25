import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Project } from '../../../models/projet/projet.model';
import { CommonModule } from '@angular/common';
import { ListCitoyenComponent } from '../../utilisateurs/citoyens/list-citoyen/list-citoyen.component';
import { ListPrestataireComponent } from '../../utilisateurs/prestataires/list-prestataire/list-prestataire.component';

@Component({
  selector: 'app-autorite-dashboard',
  imports: [ReactiveFormsModule, CommonModule, ListPrestataireComponent,ListCitoyenComponent],
  templateUrl: './autorite-dashboard.component.html',
  styleUrl: './autorite-dashboard.component.css',
  standalone:true
})
export class AutoriteDashboardComponent implements OnInit{
  prestatairesVisible: boolean=false
  citoyenVisible: boolean=false
  projetVisible: boolean=false
  historieVisible:boolean=false
  avisVisible: boolean=false
constructor(){}

ngOnInit(): void {
    
}


ngPrestatairesVisible():void {
  this.prestatairesVisible=true
  this.citoyenVisible=false
  this.projetVisible=false
  this.historieVisible=false
  this.avisVisible=false
 
 }

 ngCitoyenVisible():void {
  this.prestatairesVisible=false
  this.citoyenVisible=true
  this.projetVisible=false
  this.historieVisible=false
  this.avisVisible=false
 
 }

 ngProjetVisible():void {
  this.prestatairesVisible=false
  this.citoyenVisible=false
  this.projetVisible=true
  this.historieVisible=false
  this.avisVisible=false
 }

 ngHistorieVisible():void {
  this.prestatairesVisible=false
  this.citoyenVisible=false
  this.projetVisible=false
  this.historieVisible=true
  this.avisVisible=false
 }


 ngAvisVisible():void {
  this.prestatairesVisible=false
  this.citoyenVisible=false
  this.projetVisible=false
  this.historieVisible=false
  this.avisVisible=true
 
 }

}
