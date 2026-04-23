import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonDatetime,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';

import { WeightEntry } from '../../models/weight-entry';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-weight-log',
  templateUrl: './weight-log.page.html',
  styleUrls: ['./weight-log.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonDatetime,
    IonHeader,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonTextarea,
    IonTitle,
    IonToolbar
  ]
})
export class WeightLogPage implements OnInit {
  weightEntries: WeightEntry[] = [];

  formData = {
    date: new Date().toISOString(),
    weight: null as number | null,
    note: ''
  };

  constructor(private storageService: StorageService) {}

  async ngOnInit(): Promise<void> {
    await this.loadEntries();
  }

  async loadEntries(): Promise<void> {
    this.weightEntries = await this.storageService.getWeightEntries();
  }

  async addEntry(): Promise<void> {
    if (!this.formData.weight || this.formData.weight <= 0) {
      return;
    }

    const newEntry: WeightEntry = {
      id: crypto.randomUUID(),
      date: this.formData.date,
      weight: this.formData.weight,
      note: this.formData.note.trim()
    };

    await this.storageService.addWeightEntry(newEntry);
    await this.loadEntries();

    this.formData = {
      date: new Date().toISOString(),
      weight: null,
      note: ''
    };
  }

  async deleteEntry(id: string): Promise<void> {
    await this.storageService.deleteWeightEntry(id);
    await this.loadEntries();
  }
}