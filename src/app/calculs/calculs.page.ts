import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonList, 
  IonItem, 
  IonInput, 
  IonButton, 
  IonLabel,
  IonText
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-calculs',
  templateUrl: './calculs.page.html',
  styleUrls: ['./calculs.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardSubtitle, 
    IonCardContent, 
    IonList, 
    IonItem, 
    IonInput, 
    IonButton, 
    IonLabel,
    IonText,
    CommonModule, 
    FormsModule
  ]
})
export class CalculsPage implements OnInit {
  n1: number | null = null;
  n2: number | null = null;
  res: number | string | null = null;

  constructor() { }

  ngOnInit() {
  }

  add() {
    if (this.n1 !== null && this.n2 !== null) {
      this.res = this.n1 + this.n2;
    }
  }

  sub() {
    if (this.n1 !== null && this.n2 !== null) {
      this.res = this.n1 - this.n2;
    }
  }

  mul() {
    if (this.n1 !== null && this.n2 !== null) {
      this.res = this.n1 * this.n2;
    }
  }

  div() {
    if (this.n1 !== null && this.n2 !== null) {
      if (this.n2 !== 0) {
        this.res = (this.n1 / this.n2).toFixed(2);
      } else {
        this.res = "Division par zéro impossible";
      }
    }
  }

  clear() {
    this.n1 = null;
    this.n2 = null;
    this.res = null;
  }
}
