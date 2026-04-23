import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { WeightEntry } from '../models/weight-entry';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private storage: Storage | null = null;
  private readonly weightKey = 'weightEntries';

  constructor(private ionicStorage: Storage) {}

  async init(): Promise<void> {
    if (!this.storage) {
      this.storage = await this.ionicStorage.create();
    }
  }

  async getWeightEntries(): Promise<WeightEntry[]> {
    await this.init();
    return (await this.storage?.get(this.weightKey)) ?? [];
  }

  async addWeightEntry(entry: WeightEntry): Promise<void> {
    const entries = await this.getWeightEntries();
    entries.unshift(entry);
    await this.storage?.set(this.weightKey, entries);
  }

  async deleteWeightEntry(id: string): Promise<void> {
    const entries = await this.getWeightEntries();
    const updatedEntries = entries.filter(entry => entry.id !== id);
    await this.storage?.set(this.weightKey, updatedEntries);
  }

  async getLatestWeight(): Promise<number | null> {
    const entries = await this.getWeightEntries();
    return entries.length > 0 ? entries[0].weight : null;
  }

  async getWeightEntryCount(): Promise<number> {
    const entries = await this.getWeightEntries();
    return entries.length;
  }

  async getAverageWeight(): Promise<number | null> {
    const entries = await this.getWeightEntries();

    if (entries.length === 0) {
      return null;
    }

    const total = entries.reduce((sum, entry) => sum + entry.weight, 0);
    return total / entries.length;
  }
}