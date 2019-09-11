import { Component, OnInit, Injectable } from '@angular/core';
import { Product } from './product.entity';


@Injectable()

//this is my component
export class ProductsService{

  products= [
    {
      "Id": 1,
      "Name": "Pen",
      "price": 19.95,
      "instock":true,
      "color":"red",
      "Quantity":5
      
    },
    {
      "Id": 2,
      "Name": "pencil",
      "price": 19.95,
      "instock":false,
      "color":"red",
      "Quantity":5
      
    },
    {
      "Id": 3,
      "Name": "bag",
      "price": 19.95,
      "instock":true,
      "color":"red",
      "Quantity":5
      
    },
    {
      "Id": 4,
      "Name": "rubber",
      "price": 19.95,
      "instock":false,
      "color":"red",
      "Quantity":5
      
    },
    {
      "Id": 5,
      "Name": "Leaf Rake",
      "price": 19.95,
      "instock":true,
      "color":"red",
      "Quantity":5
      
    },
  ];

    getProductsById(Id:any): Product{
      
      return this.products.find(p=>p.Id==Id);
      
    }
  
  getProducts(): Product[] {
    return this.products;
  }
}
