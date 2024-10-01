import { ReviewSystemComponent } from "./review-system/review-system.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RestaurantsComponent } from "./restaurants/restaurants.component";
import { RestaurantComponent } from "./restaurant/restaurant.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";

const routes: Routes = [
  { path: "", redirectTo: "/landing-page", pathMatch: "full" },
  { path: "restaurants", component: RestaurantsComponent },
  { path: "restaurant", component: RestaurantComponent },
  { path: "restaurant/:res_id", component: RestaurantComponent },
  { path: "review-system", component: ReviewSystemComponent },
  { path: "landing-page", component: LandingPageComponent },
  { path: "landing-page/:city_id", component: LandingPageComponent },
  { path: "landing-page/:optionCity", component: LandingPageComponent },
  {
    path: "restaurants/:city_id/:categoryQ/:cuisineQ",
    component: RestaurantsComponent,
  },
  {
    path: "restaurants/:city_id/:categoryQ",
    component: RestaurantsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
