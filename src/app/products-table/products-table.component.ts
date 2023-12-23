import { Component, ViewChild } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/product.model';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css']
})
export class ProductsTableComponent {
  @ViewChild(MatTable)datatable!: MatTable<any>;
  prodColumns: string[] = ["id", "name", "department", "price", "description"];
  products: Product[]; 
constructor(private productService: ProductService ){
this.products= this.productService.getProduct();
this.productService.onNewProduct.subscribe((p)=>{
this.datatable.renderRows();
});
}
}
