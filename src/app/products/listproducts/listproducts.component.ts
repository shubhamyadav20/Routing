import { Component, OnInit } from '@angular/core';
import { ProductsService} from '../product.service'
import { Product } from '../product.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listproducts',
  templateUrl: './listproducts.component.html',
  styleUrls: ['./listproducts.component.css']
})
export class ListproductsComponent implements OnInit {

  constructor(private productsservice : ProductsService,private router:Router) {
    
   }
  title: string ="Product app";
  products: Product[] = [];
  
  name="Shubham Yadav";

  ngOnInit() {
    this.products=this.productsservice.getProducts();
    
  }
  editProduct(id):void{
    this.router.navigate(['editproduct',id]);
  }

}
