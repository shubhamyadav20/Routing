import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../product.service';
import { Product } from '../product.entity';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/Forms';

@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent implements OnInit {

  productidtoedit:any;
  editproduct:Product;

  editProductForm : FormGroup;


  

  constructor(private route:ActivatedRoute,private serviceProduct:ProductsService) { }

  ngOnInit() {
    this.route.params.subscribe((data)=>{
      this.productidtoedit=data.Id;

    });
    this.editproduct=this.serviceProduct.getProductsById(this.productidtoedit);
    console.log(this.productidtoedit);
    this.editProductForm=new FormGroup(
      {
        id: new FormControl(this.editproduct.Id),
        name:new FormControl(this.editproduct.Name,[Validators.required]),
        price:new FormControl(this.editproduct.price,[]),
        color:new FormControl(this.editproduct.color),
        instock:new FormControl(this.editproduct.instock),
        quantity:new FormControl(this.editproduct.Quantity),

      }
    )
  }
  setDefault(){
    this.editProductForm.setValue({
      id:this.editproduct.Id,
      name:this.editproduct.Name,
      price:this.editproduct.price,
      color:this.editproduct.color,
      instock:this.editproduct.instock,
      quantity:this.editproduct.Quantity
    })
  }
    editproducts(){
      alert("hey");
    }

}
