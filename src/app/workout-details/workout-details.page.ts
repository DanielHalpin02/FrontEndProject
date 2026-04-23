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
import { ActivatedRoute, RouterLink } from '@angular/router';

import { Workout } from '../models/workout';
import { WorkoutService } from '../services/workout.service';

@Component({
  selector: 'app-workout-details',
  templateUrl: './workout-details.page.html',
  styleUrls: ['./workout-details.page.scss'],
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
export class WorkoutDetailsPage implements OnInit {
  workout: Workout | undefined;
  description = '';
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private workoutService: WorkoutService
  ) {}

  ngOnInit(): void {
    const workoutId = this.route.snapshot.paramMap.get('id');

    if (!workoutId) {
      this.errorMessage = 'Workout not found.';
      return;
    }

    this.workoutService.getWorkoutById(workoutId).subscribe({
      next: (data) => {
        if (!data) {
          this.errorMessage = 'Workout not found.';
          return;
        }

        this.workout = data;
        this.description = this.workoutService.getWorkoutDescription(data.name);
      },
      error: () => {
        this.errorMessage = 'Unable to load workout details right now.';
      }
    });
  }
}