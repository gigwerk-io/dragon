import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import { CategoriesService } from './categories.service';
import {CategoriesResponse, Category} from '../interfaces/favr/MarketplaceJob';
import {environment} from '../../../environments/environment';

describe('CategoriesService', () => {
  let service: CategoriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CategoriesService
      ]
    });
    httpMock = TestBed.get(HttpTestingController);
    service = TestBed.get(CategoriesService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should get job categories via GET', () => {
    const dummyCategoryResponse: CategoriesResponse = {
      categories: [{
        id: 1,
        name: 'Assembly',
        icon_image: 'https://favr-images.s3.us-east-2.amazonaws.com/categories/gear.png',
        active: true
      }]
    };

    service.getCategories().then(categories => {
      expect(categories.length).toBe(1);
      expect(categories).toEqual(dummyCategoryResponse.categories);
    });

    const request = httpMock.expectOne(`${environment.apiUrl}/categories`);

    expect(request.request.method).toBe('GET');

    request.flush(dummyCategoryResponse);
  });
});
