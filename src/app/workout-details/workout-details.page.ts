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
  IonToolbar,
  IonBackButton,
  IonButtons
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
    IonBackButton,
    IonButtons,
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
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.errorMessage = 'Workout not found.';
      return;
    }

    this.workoutService.getWorkoutById(id).subscribe({
      next: (data) => {
        if (!data) {
          this.errorMessage = 'Workout not found.';
          return;
        }

        this.workout = data;
        this.description = this.workoutService.getWorkoutDescription(data.name);
      },
      error: () => {
        this.errorMessage = 'Unable to load workout details.';
      }
    });
  }
}