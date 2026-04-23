import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    RouterLink
  ]
})
export class DashboardPage implements OnInit {
  latestWeight: number | null = null;
  totalEntries = 0;
  averageWeight: number | null = null;

  constructor(private storageService: StorageService) {}

  async ngOnInit(): Promise<void> {
    await this.loadDashboardData();
  }

  async ionViewWillEnter(): Promise<void> {
    await this.loadDashboardData();
  }

  async loadDashboardData(): Promise<void> {
    this.latestWeight = await this.storageService.getLatestWeight();
    this.totalEntries = await this.storageService.getWeightEntryCount();
    this.averageWeight = await this.storageService.getAverageWeight();
  }
}