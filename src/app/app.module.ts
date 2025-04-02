import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { WeatherCardComponent } from './components/weather-card/weather-card.component';
import { FavoritesSidebarComponent } from './components/favorites-sidebar/favorites-sidebar.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WeatherCardComponent,
    FavoritesSidebarComponent
  ],
  imports: [BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
