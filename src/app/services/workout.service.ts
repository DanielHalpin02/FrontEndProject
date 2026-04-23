import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Workout } from '../models/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workoutUrl =
    'https://raw.githubusercontent.com/yuhonas/free-exercise-db/main/dist/exercises.json';

  constructor(private http: HttpClient) {}

  getDisplayName(name: string): string {
  const names: Record<string, string> = {
    'Alternate Heel Touchers': 'Alternating Heel Touches',
    '3/4 Sit-Up': 'Sit-Ups ',
    '90/90 Hamstring': '90 Degree Hamstring Stretch',
    'Air Bike': 'Bicycle Crunches',
    'Band Assisted Pull-Up': 'Assisted Pull-Ups',
    'Ab Crunch Machine': 'Crunches',
    'Alternate Lateral Raise': 'Alternating Lateral Raise',
    'Barbell Curl': 'Bicep Curl (Barbell)',
    'Bench Press': 'Chest Press (Bench)',
    'Bodyweight Squat': 'Body Squats',
    'Adductor':'Adductor Stretches',
    'Alternate Incline Dumbbell Curl':'Alternating Incline Dumbbell Curls',
    'Alternate Leg Diagonal Bound':'Alternating Leg Diagonal Jumps',
    'Alternate Hammer Curl':'Alternating Hammer Curls'
  };

  return names[name] || name;
}


  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.workoutUrl);
  }

  getWorkoutById(id: string): Observable<Workout | undefined> {
    return this.getWorkouts().pipe(
      map(workouts => workouts.find(workout => workout.id === id))
    );
  }

  getWorkoutDescription(name: string): string {
    const cleanName = name.toLowerCase();

    if (cleanName.includes('sit-up')) {
      return 'A shortened sit-up variation that targets the abdominal muscles while reducing strain.';
    }

    if (cleanName.includes('hamstring')) {
      return 'A stretch that improves hamstring flexibility and hip mobility.';
    }

    if (cleanName.includes('crunch')) {
      return 'A core-strengthening exercise using controlled abdominal movement.';
    }

    if (cleanName.includes('air bike')) {
      return 'A dynamic core exercise combining cycling motion and torso rotation.';
    }

    return 'This exercise helps improve fitness when performed with proper form and control.';
  }
}