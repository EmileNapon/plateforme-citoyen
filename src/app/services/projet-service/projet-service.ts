import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from '../../models/projet/projet.model';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

private apiUser = 'http://127.0.0.1:8000/plateforme-integre/users/';
private apiUrl = 'http://127.0.0.1:8000/plateforme-integre/projects/';
  constructor(private http: HttpClient) { }

  // Créer un nouveau projet
  createProject(project: Project): Observable<Project> {
    return this.http.post<Project>(this.apiUrl, project);
  }



  // Mettre à jour un projet existant
  updateProject(projectId: number, project: Project): Observable<Project> {
    return this.http.put<Project>(`${this.apiUrl}${projectId}/`, project);
  }

  // Récupérer tous les projets
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl);
  }
    // Récupérer tous les projets
    getPrestataire(): Observable<User[]> {
        return this.http.get<User[]>(this.apiUser);
      }
    

  // Récupérer un projet spécifique
  getProjectById(projectId: number): Observable<Project> {
    return this.http.get<Project>(`${this.apiUrl}${projectId}/`);
  }
}
