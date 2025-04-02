import { Component, inject } from '@angular/core';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { FavoritesSidebarComponent } from './components/favorites-sidebar/favorites-sidebar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { WeatherService } from './services/weather.service'; // Importando o serviço

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CommonModule,
    FormsModule,
    WeatherCardComponent,
    FavoritesSidebarComponent
  ],
  providers: [WeatherService] // Registrando o serviço
})
export class AppComponent {
  city: string = '';
  weather: any = null;
  favorites: string[] = [];

  private weatherService = inject(WeatherService);

  constructor() {
    const storedFavorites = localStorage.getItem('favorites');
    this.favorites = storedFavorites ? JSON.parse(storedFavorites) : []; // ✅ Ensure it’s always an array
  }

  searchWeather(city?: string) {
    const query = (city || this.city).toString();
    this.weatherService.getWeather(query).subscribe(data => {
      this.weather = data;
    });
  }

  favoriteCity(city: string) {
    if (!Array.isArray(this.favorites)) {
      this.favorites = [];
    }
    
    if (!this.favorites.includes(city)) {
      // Create a new array reference to trigger change detection
      this.favorites = [...this.favorites, city];
      localStorage.setItem('favorites', JSON.stringify(this.favorites));
    }
  }
}