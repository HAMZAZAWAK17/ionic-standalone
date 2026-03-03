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
  op1: any = null;
  op2: any = null;
  res: any = null;

  constructor() { }

  ngOnInit() {
  }

  add() {
    if (this.op1 !== null && this.op2 !== null) {
      this.res = this.op1 + this.op2;
    }
  }

  sub() {
    if (this.op1 !== null && this.op2 !== null) {
      this.res = this.op1 - this.op2;
    }
  }

  mul() {
    if (this.op1 !== null && this.op2 !== null) {
      this.res = this.op1 * this.op2;
    }
  }

  div() {
    if (this.op1 !== null && this.op2 !== null) {
      if (this.op2 !== 0) {
        this.res = (this.op1 / this.op2).toFixed(2);
      } else {
        this.res = "Division par zéro impossible";
      }
    }
  }

  clear() {
    this.op1 = null;
    this.op2 = null;
    this.res = null;
  }
}
