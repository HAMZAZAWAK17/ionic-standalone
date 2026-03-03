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
  IonCardContent, 
  IonItem, 
  IonInput, 
  IonButton,
  IonGrid,
  IonRow,
  IonCol
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
    IonCardContent, 
    IonItem, 
    IonInput, 
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    CommonModule, 
    FormsModule
  ]
})

export class CalculsPage implements OnInit {
 op1: number = 0;
 op2: number = 0;

 result: number = 0;

  constructor() { }

  ngOnInit() {
  }

  add() {
    if (this.op1 !== null && this.op2 !== null) {
      this.result = this.op1 + this.op2;
    }
  }

  sub() {
    if (this.op1 !== null && this.op2 !== null) {
      this.result = this.op1 - this.op2;
    }
  }

  mul() {
    if (this.op1 !== null && this.op2 !== null) {
      this.result = this.op1 * this.op2;
    }
  }

  div() {
    if (this.op1 !== null && this.op2 !== null) {
      if (this.op2 !== 0) {
        this.result = (this.op1 / this.op2).toFixed(2);
      } else {
        this.result = "Division par zéro impossible";
      }
    }
  }

  clear() {
    this.op1 = null;
    this.op2 = null;
    this.result = null;
  }
}
