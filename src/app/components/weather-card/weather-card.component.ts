import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-weather-card',
  standalone: true, // ✅ Standalone component
  imports: [CommonModule], // ✅ Fix: Import CommonModule for *ngIf
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent {
  @Input() weather: any;
  @Input() onFavorite: (city: string) => void = () => {};

  getWeatherEmoji(condition: string): string {
    switch (condition.toLowerCase()) {
      case 'clear': return '☀️';
      case 'clouds': return '☁️';
      case 'rain': return '🌧️';
      default: return '❓';
    }
  }

  handleFavorite() {
    if (this.weather?.city?.name && this.onFavorite) { // ✅ Avoid undefined function call
      this.onFavorite(this.weather.city.name);
    }
  }
}
