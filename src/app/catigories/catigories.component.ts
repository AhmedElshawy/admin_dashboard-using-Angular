import { Component, OnInit } from '@angular/core';
import { IProductType } from '../models/IProductType';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-catigories',
  templateUrl: './catigories.component.html',
  styleUrls: ['./catigories.component.scss']
})
export class CatigoriesComponent implements OnInit {

  catigories:IProductType[];
  constructor(private productsService:ProductsService) {
    this.catigories = [];
  }

  ngOnInit(): void {
    this.getCatigories();
  }

  getCatigories(){
    this.productsService.getTypes().subscribe(data=>{
      this.catigories = data;
    });
  }

  onDelete(id:number)
  {
    this.productsService.deleteCategory(id).subscribe(data=>{
      this.catigories.splice(this.catigories.findIndex(p => p.id === id), 1);    
    });
  }
}
