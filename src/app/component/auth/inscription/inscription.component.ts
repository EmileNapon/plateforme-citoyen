import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-connexion',
  imports: [],
  templateUrl: './inscription.component.html',
  styleUrl: './inscription.component.css'
})
export class ConnexionComponent implements OnInit {

  selectedFile: File | null = null;
  registrationForm!:FormGroup

  constructor(private fb: FormBuilder, private userService: UserService){}

  ngOnInit():void{
   this.initForms()
  }
initForms():void{
  this.registrationForm = this.fb.group({
    role: ['citizen', Validators.required],
    username: [null], // Champ séparé pour username
    first_name: [''],
    last_name: [''],
    email: ['', Validators.required],
    password: [''],
    phone_number: [''],
    profession: [''],
    name_organization: [''],
    nom_entreprise: [''],
    secteur_activite: [''],
    enabled_notifications: [true]
  });

  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
  onSubmit() {
    const formData = new FormData();
    formData.append('role', this.registrationForm.value.role);
    formData.append('username', this.registrationForm.value.first_name); // À corriger
    formData.append('first_name', this.registrationForm.value.first_name);
    formData.append('last_name', this.registrationForm.value.last_name);
    formData.append('email', this.registrationForm.value.email);
    formData.append('password', this.registrationForm.value.password);
    formData.append('phone_number', this.registrationForm.value.phone_number);
    formData.append('profession', this.registrationForm.value.profession);
    formData.append('name_organization', this.registrationForm.value.name_organization);
    formData.append('nom_entreprise', this.registrationForm.value.nom_entreprise);
    formData.append('secteur_activite', this.registrationForm.value.secteur_activite);
    formData.append('enabled_notifications', this.registrationForm.value.enabled_notifications);
    if (this.selectedFile) {
      formData.append('profile_pic', this.selectedFile, this.selectedFile.name);
    }

    this.userService.registerUser(formData).subscribe(
      response => console.log('Utilisateur enregistré', response),
      error => console.error('Erreur', error)
    );
  }
}



