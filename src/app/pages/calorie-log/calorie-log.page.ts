import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-calorie-log',
  templateUrl: './calorie-log.page.html',
  styleUrls: ['./calorie-log.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CalorieLogPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
