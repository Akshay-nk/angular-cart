import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  SERVER_URL="http://localhost:3000"

  constructor(private http:HttpClient) { }

  getAllProductsAPI(){
    return this.http.get(`${this.SERVER_URL}/allproducts`)
  }

  registerAPI(user:any){
    return this.http.post(`${this.SERVER_URL}/register`,user)
  }

  loginAPI(user:any){
    return this.http.post(`${this.SERVER_URL}/login`,user)
  }

  viewProductAPI(id:any){
    return this.http.get(`${this.SERVER_URL}/view/product/${id}`)
  }

  appendTokenToHeader(){
    const token = sessionStorage.getItem("token")
    let headers = new HttpHeaders()
    if(token){
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    return {headers}
  }
addWishListAPI(product:any){
  return this.http.post( `${this.SERVER_URL}/addWishlist`,product,this.appendTokenToHeader())
}
}
