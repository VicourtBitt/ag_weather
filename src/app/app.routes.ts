import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FavoritesComponent } from './pages/favorites/favorites.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página inicial
  { path: 'favorites', component: FavoritesComponent }, // Página de favoritos
  { path: '**', redirectTo: '' } // Redireciona para a Home caso a rota não exista
];
