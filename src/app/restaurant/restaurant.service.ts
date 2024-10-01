import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";

const ZOMATO_API_KEY = "69c3d5c5c02ec920217ee0285d0df13e";
const BASE_URL = "https://developers.zomato.com/api/v2.1";

@Injectable({
  providedIn: "root",
})
export class RestaurantService {
  private headers;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      "user-key": ZOMATO_API_KEY,
    });
  }

  searchSoloRestaurant(res_id: string) {
    const params = new HttpParams().append("res_id", `${res_id}`);
    return this.http.get<any>(`${BASE_URL}/restaurant`, {
      headers: this.headers,
      params,
    });
  }

  searchReviews(
    res_id: string,
    paginationStart: number,
    paginationCount: number
  ) {
    const params = new HttpParams()
      .append("res_id", `${res_id}`)
      .append("start", `${paginationStart}`)
      .append("count", `${paginationCount}`);

    return this.http.get<any>(`${BASE_URL}/reviews`, {
      headers: this.headers,
      params,
    });
  }

  searchDailyMenu(res_id: string) {
    const params = new HttpParams().append("res_id", `${res_id}`);
    return this.http.get<any>(`${BASE_URL}/dailymenu`, {
      headers: this.headers,
      params,
    });
  }
}
