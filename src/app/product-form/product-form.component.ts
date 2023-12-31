import { Component, OnInit } from '@angular/core';
import { Department } from '../models/department.model';
import { ProductService } from '../product.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {


  name: string="";
  department!: Department; 
  price: number= 0;
  description: string=""; 
  departments: Department[] | undefined;
  constructor(private productService: ProductService, 
    private departmentService :DepartmentService,
    ){
this.departments = this.departmentService.getDepartments();
  }
  ngOnInit(): void {
  }

  save(){
this.productService.addProduct({
  name: this.name,
  price: this.price,
  description: this.description,
  department: this.department
});
this.clear();
  }
  clear(){
    this.name="";
    this.price=0;
    this.description="";
    this.department!=null;
  }
  
}
