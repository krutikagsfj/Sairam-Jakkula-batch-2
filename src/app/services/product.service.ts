import { Injectable } from '@angular/core';
import{HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
//creating refernce variable for for Httpclient to read 
  constructor(private http:HttpClient) { }
  
  getproducts()
  {
    //we  are reading the ProductBrands.json file from the Http HttpClient
    let url="assets/productBrands.json";
    return this.http.get(url);
  }


}
