import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  private _jsonURL = 'assets/data.json';

  constructor(private http: HttpClient) {}

  public getData(): Observable<Product[]> {
    return this.http.get<Product[]>(this._jsonURL);
  }
}
