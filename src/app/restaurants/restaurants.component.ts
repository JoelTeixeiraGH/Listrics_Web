import { RestaurantsService } from "./restaurants.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-restaurants",
  templateUrl: "./restaurants.component.html",
  styleUrls: ["./restaurants.component.css"],
})
export class RestaurantsComponent implements OnInit {
  restaurantes: any;
  categorias: any;
  cozinhas: any;
  cityAndCategory: any;

  PORTO_ID = "311";
  LISBOA_ID = "82";
  ALGARVE_ID = "11610";

  city_id = "311"; // Porto
  city_text = "Porto";
  categoryQ = "";
  categoryText = "";
  cuisineQ = "";
  cuisineText = "";

  pages: number[];
  currentPage = 1;
  paginationStart = 0;
  paginationCount = 20;
  results = 100;

  constructor(
    private restaurantService: RestaurantsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initCurrent();
    this.getCategories();
    this.getCuisines();
  }

  selectCategory(category: string, categoryT: string) {
    this.categoryQ = category;
    this.categoryText = categoryT;
    this.currentPage = 1;
    this.getRestaurantByCCC();
  }

  selectCuisine(cuisine: string, cuisineT: string) {
    this.cuisineQ = cuisine;
    this.cuisineText = cuisineT;
    this.currentPage = 1;
    this.getRestaurantByCCC();
  }

  resetFilters() {
    this.cuisineQ = "";
    this.categoryQ = "";
    this.categoryText = "";
    this.cuisineText = "";
    this.paginationStart = 0;
    this.currentPage = 1;
    this.getRestaurantByCCC();
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

  selectCityList(city: string) {
    this.selectCity(city);
    this.currentPage = 1;
    this.getRestaurantByCCC();
  }

  set_pages() {
    this.pages = new Array();
    const num = Math.ceil(this.results / this.paginationCount);
    for (let i = 1; i <= num; i++) {
      this.pages.push(i);
    }
  }

  pagination(page: number) {
    this.paginationStart = (page - 1) * this.paginationCount;
    this.getRestaurantByCCC();
    this.currentPage = page;
    console.log(this.currentPage);
  }

  getRestaurantByCCC() {
    this.restaurantService
      .getRestaurantByCCC(
        this.city_id,
        this.categoryQ,
        this.cuisineQ,
        this.paginationStart,
        this.paginationCount
      )
      .subscribe((result) => {
        this.restaurantes = result.restaurants;
        // pagination
        if (result.results_found <= 100) {
          this.results = result.results_found;
        } else {
          this.results = 100;
        }
        this.paginationStart = 0;
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        this.set_pages();
      });
  }

  getCategories() {
    this.restaurantService
      .getCategories()
      .subscribe((response) => (this.categorias = response));
  }

  getCuisines() {
    this.restaurantService
      .getCuisines(this.city_id)
      .subscribe((response) => (this.cozinhas = response));
  }

  initCurrent() {
    const id = this.route.snapshot.paramMap.get("city_id");
    const idCategory = this.route.snapshot.paramMap.get("categoryQ");
    const idCuisine = this.route.snapshot.paramMap.get("cuisineQ");

    if (id != null) {
      this.selectCity(id);
    }
    this.categoryQ = idCategory;
    this.cuisineQ = idCuisine;

    this.restaurantService
      .getRestaurantByCCC(
        this.city_id,
        this.categoryQ,
        this.cuisineQ,
        this.paginationStart,
        this.paginationCount
      )
      .subscribe((result) => {
        this.restaurantes = result.restaurants;
        // pagination
        if (result.results_found <= 100) {
          this.results = result.results_found;
        }
        this.set_pages();
      });
  }
}
