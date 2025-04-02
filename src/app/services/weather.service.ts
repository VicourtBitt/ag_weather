import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../enviroments/enviroment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = environment.weatherApiUrl;
  private apiKey = environment.weatherApiKey;

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?q=${city}&units=metric&appid=${this.apiKey}`)
      .pipe(map(response => response));
  }
}
