import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prestataire-dashboard',
  imports: [CommonModule],
  templateUrl: './prestataire-dashboard.component.html',
  styleUrl: './prestataire-dashboard.component.css',
  standalone:true
})
export class PrestataireDashboardComponent implements OnInit{

  prestatairesVisible: boolean=false
  citoyenVisible: boolean=false
  projetVisible: boolean=false
  historieVisible:boolean=false
  avisVisible: boolean=false
constructor(){}

ngOnInit(): void {
    
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
