import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { NavBarComponent } from "./nav-bar/nav-bar.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { ReviewSystemComponent } from "./review-system/review-system.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { NavBarMiniComponent } from "./nav-bar-mini/nav-bar-mini.component";
import { MatExpansionModule } from "@angular/material/expansion";

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    NavBarComponent,
    RestaurantComponent,
    ReviewSystemComponent,
    LandingPageComponent,
    NavBarMiniComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
