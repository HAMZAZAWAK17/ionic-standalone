import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
  IonItem, IonInput, IonButton, IonText, IonButtons, IonBackButton
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-jeu',
  templateUrl: './jeu.page.html',
  styleUrls: ['./jeu.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonCard, IonCardHeader, IonCardTitle, IonCardContent, 
    IonItem, IonInput, IonButton, IonText, IonButtons, IonBackButton
  ]
})
export class JeuPage implements OnInit {
  nombreSecret: number = 0; // Défini comme variable dans la classe TS
  tentatives: number = 5;
  nombreSaisi: number | null = null;
  message: string = '';
  jeuTermine: boolean = false;
  gagne: boolean = false;

  constructor() { }

  ngOnInit() {
    this.initialiserJeu();
  }

  initialiserJeu() {
    // Génère un nombre aléatoire entre 0 et 100 inclus
    this.nombreSecret = Math.floor(Math.random() * 101);
    this.tentatives = 5;
    this.nombreSaisi = null;
    this.message = 'Saisissez un nombre. Vous avez 5 essais !';
    this.jeuTermine = false;

    
    this.gagne = false;
  }

  verifierNombre() {
    if (this.jeuTermine || this.nombreSaisi === null) return;

    this.tentatives--;

    if (this.nombreSaisi > this.nombreSecret) {
      this.message = 'le nombre saisi est supérieur au nombre secret!!!';
    } else if (this.nombreSaisi < this.nombreSecret) {
      this.message = 'le nombre saisi est inférieur au nombre secret!!!';
    } else {
      this.message = 'Bravo vous avez gagnez!!!!';
      this.jeuTermine = true;
      this.gagne = true;
      return;
    }

    if (this.tentatives <= 0 && !this.gagne) {
      this.message = `Dommage ! Le nombre secret était ${this.nombreSecret}.`;
      this.jeuTermine = true;
    }
    
    // Réinitialiser le champ d'entrée après chaque tentative
    this.nombreSaisi = null;
  }
}
