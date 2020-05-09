import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CategoriesResponse, Category} from '../interfaces/favr/MarketplaceJob';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(public http: HttpClient) {
  }

  getCategories(): Promise<Category[]> {
    return this.http.get<CategoriesResponse>(`${environment.apiUrl}/categories`)
      .toPromise()
      .then(res => res.categories);
  }
}
