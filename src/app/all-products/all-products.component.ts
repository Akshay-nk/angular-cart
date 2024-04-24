import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit{

  allProducts:any=[];
  constructor(private api:ApiService,private toaster:ToastrService){}

  ngOnInit(): void {
    this.getAllProduct()
  }

  getAllProduct(){
    this.api.getAllProductsAPI().subscribe({
      next:(res:any)=>{
        this.allProducts = res;
      },
    error:(reason:any)=>{
      console.log(reason);
      
    }
      
    })
  }


  addToCart(product:any){
     if(sessionStorage.getItem("token")){

     }else{
          this.toaster.warning( "Please Login First","Login Required");
     }
  }

  addToWishlist(product:any){
    if(sessionStorage.getItem("token")){
     
    }else{
      this.toaster.warning( "Please Login First","Login Required");
    }
 }
}
