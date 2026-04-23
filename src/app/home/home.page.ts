import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar, IonRouterLink } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonRouterLink]
})
export class HomePage {}