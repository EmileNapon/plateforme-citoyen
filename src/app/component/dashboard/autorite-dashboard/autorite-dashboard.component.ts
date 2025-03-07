import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProjectService } from '../../../services/projet-service/projet-service';
import { Project } from '../../../models/projet/projet.model';
import { NavbarPrincipaleComponent } from '../../utils/navbar-principale/navbar-principale.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-autorite-dashboard',
  imports: [ReactiveFormsModule, NavbarPrincipaleComponent, CommonModule, RouterLink],
  templateUrl: './autorite-dashboard.component.html',
  styleUrl: './autorite-dashboard.component.css'
})
export class AutoriteDashboardComponent {

  prestataires:any[]=[]
  prestatairesFiltre:any[]=[]

  projectForm !: FormGroup;
  projectId: number | null = null;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      location: ['', [Validators.required]],
      start_date: ['', [Validators.required]],
      end_date: ['', [Validators.required]],
      budget: ['', [Validators.required, Validators.min(0)]],
      contractor: ['', [Validators.required]],
      status: ['', [Validators.required]],
      geo_coordinates: ['', [Validators.required]],
      progress: ['', [Validators.required, Validators.min(0), Validators.max(100)]]
    });

    this.projectId = this.route.snapshot.params['id'];
    if (this.projectId) {
      this.isEditMode = true;
      this.loadProject();
    }
    this.loadPrestataire()
  }

  loadProject(): void {
    this.projectService.getProjectById(this.projectId!).subscribe((project) => {
      this.projectForm.patchValue(project);
    });
  }

  loadPrestataire(): void {
    this.projectService.getPrestataire().subscribe((data) => {
      this.prestataires=data;
      this.filData()
    });
  }

  filData(){
    this.prestatairesFiltre=this.prestataires.filter(user=>user.role=='supplier')
    console.log('tttttttttttt',this.prestatairesFiltre)
  }

  onSubmit(): void {
    if (this.projectForm.invalid) {
      return;
    }

    const projectData: Project = this.projectForm.value;

    if (this.isEditMode) {
      this.projectService.updateProject(this.projectId!, projectData).subscribe(() => {
        this.router.navigate(['/projects']);
      });
    } else {
      this.projectService.createProject(projectData).subscribe(() => {
        this.router.navigate(['/projects']);
      });
    }
  }
}
