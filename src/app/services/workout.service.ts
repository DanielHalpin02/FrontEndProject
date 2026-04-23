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

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.workoutUrl);
  }

  getWorkoutById(id: string): Observable<Workout | undefined> {
    return this.getWorkouts().pipe(
      map(workouts => workouts.find(workout => workout.id === id))
    );
  }

  getWorkoutDescription(name: string): string {
    const descriptions: Record<string, string> = {
      '90/90 Hamstring':
        'A seated hamstring stretch done with the legs bent at right angles to improve flexibility and mobility.',
      '3/4 Sit-Up':
        'A shorter-range sit-up variation that works the abdominal muscles while reducing full-range strain.',
      'Ab Crunch Machine':
        'A machine-based abdominal exercise where you perform controlled crunch movements against resistance.'
    };

    return descriptions[name] || 'No detailed description is available for this workout yet.';
  }
}