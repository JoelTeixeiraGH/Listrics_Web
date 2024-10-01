import { LandingPageService } from "./landing-page.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-landing-page",
  templateUrl: "./landing-page.component.html",
  styleUrls: ["./landing-page.component.css"],
})
export class LandingPageComponent implements OnInit {
  collection: any;
  category: any;
  cozinhas: any;
  restaurants: any;

  PORTO_ID = "311";
  LISBOA_ID = "82";
  ALGARVE_ID = "11610";

  categoriaDrop: string;
  cidadeDrop: string;
  cozinhaDrop: string;

  city_id = "311"; // Porto
  count = 3;
  countLanding = 8;

  city_text = "Porto";

  optionCity = "";
  optionCategory = "";
  optionCuisine = "";

  constructor(
    private landingService: LandingPageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initCurrentCollections();
    this.searchCategories();
    this.searchCuisines();
    this.searchRestaurants();
  }

  searchCollections() {
    this.landingService
      .searchCollections(this.city_id, this.count)
      .subscribe((response) => (this.collection = response));
  }

  searchRestaurants() {
    this.landingService
      .searchRestaurants(this.city_id, this.countLanding)
      .subscribe((response) => (this.restaurants = response));
  }

  initCurrentCollections() {
    const id = this.route.snapshot.paramMap.get("city_id");
    if (id != null) {
      this.selectCity(id);
    }
    this.landingService
      .searchCollections(this.city_id, this.count)
      .subscribe((response) => (this.collection = response));
  }

  searchCategories() {
    this.landingService
      .searchCategories()
      .subscribe((response) => (this.category = response));
  }

  searchCuisines() {
    this.landingService
      .searchCuisines(this.city_id)
      .subscribe((response) => (this.cozinhas = response));
  }

  unselect(): void {
    this.optionCity = this.optionCategory = this.optionCuisine = "";
  }

  selectCity(city: string) {
    switch (city) {
      case "Porto":
        this.city_id = this.PORTO_ID;
        this.city_text = city;
        break;
      case "Lisbon":
        this.city_id = this.LISBOA_ID;
        this.city_text = city;
        break;
      case "Algarve":
        this.city_id = this.ALGARVE_ID;
        this.city_text = city;
        break;
      default:
        break;
    }
  }

  selectCity2(city: string) {
    this.selectCity(city);
    this.searchCuisines();
    this.searchCollections();
    this.searchRestaurants();
  }
}
