import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ListproductsComponent } from './listproducts/listproducts.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

import{ReactiveFormsModule, FormGroup, FormControl, Validators} from '@angular/Forms';
import { ProductsService } from './product.service';
import { EditproductComponent } from './editproduct/editproduct.component';


const productroutes: Routes = [
  {path:'products',component:ListproductsComponent},
  {path:'Addproduct',component:AddproductComponent},
  {path:'deleteproduct/:id',component:DeleteproductComponent},
  {path:'editproduct/:Id',component:EditproductComponent},
  {path:'productsdetails',component:ProductdetailsComponent}

];

@NgModule({
  declarations: [ListproductsComponent, AddproductComponent, DeleteproductComponent, ProductdetailsComponent, EditproductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(productroutes)
  ],
  providers:[ProductsService]
})
export class ProductModule { }
