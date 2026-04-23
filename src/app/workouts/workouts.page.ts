import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

import { Workout } from '../models/workout';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonBackButton,
    IonButtons,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonHeader,
    IonSearchbar,
    IonTitle,
    IonToolbar,
    RouterLink
  ]
})
export class WorkoutsPage implements OnInit {
  workouts: Workout[] = [];
  filteredWorkouts: Workout[] = [];
  errorMessage = '';
  searchTerm = '';

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.workoutService.getWorkouts().subscribe({
      next: (data) => {
        this.workouts = data;
        this.filteredWorkouts = data;
      },
      error: () => {
        this.errorMessage = 'Unable to load workouts right now.';
      }
    });
  }

  onSearchChange(event: Event): void {
    const target = event.target as HTMLIonSearchbarElement;
    const value = target.value?.toLowerCase() || '';

    this.searchTerm = value;

    this.filteredWorkouts = this.workouts.filter(workout =>
      workout.name.toLowerCase().includes(value)
    );
  }
}