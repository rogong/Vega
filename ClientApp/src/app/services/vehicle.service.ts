import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Make } from '../models/make';
import { Feature } from '../models/feature';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getMakes(): Observable<Make> {
    return this.http.get<Make>('/api/makes')
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  getFeatures(): Observable<Feature> {
    return this.http.get<Feature>('/api/features')
      .pipe(
        map(res => {
          return res;
        })
      )
  }
}
