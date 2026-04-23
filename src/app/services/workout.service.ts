import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Workout } from '../models/workout';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  private workoutUrl = 'https://mocki.io/v1/8796f4db-6b0c-4d9f-9b2d-9f7fd0d4e6d6';

  constructor(private http: HttpClient) {}

  getWorkouts(): Observable<Workout[]> {
    return this.http.get<Workout[]>(this.workoutUrl);
  }
}