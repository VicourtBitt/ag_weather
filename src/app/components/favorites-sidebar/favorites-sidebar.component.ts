import { Component, Input, Output, EventEmitter, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites-sidebar.component.html',
  styleUrls: ['./favorites-sidebar.component.css']
})
export class FavoritesSidebarComponent implements OnInit, OnChanges {
  @Input() favorites: string[] = [];
  @Output() citySelected = new EventEmitter<string>();
  
  ngOnInit() {
    // Initialize favorites from localStorage if needed
    if (!this.favorites || this.favorites.length === 0) {
      const storedFavorites = localStorage.getItem('favorites');
      if (storedFavorites) {
        this.favorites = JSON.parse(storedFavorites);
      }
    }
  }
  
  ngOnChanges(changes: SimpleChanges) {
    // React to changes in the favorites array
    if (changes['favorites'] && !changes['favorites'].firstChange) {
      console.log('Favorites updated:', this.favorites);
    }
  }

  selectCity(city: string) {
    this.citySelected.emit(city);
  }
}