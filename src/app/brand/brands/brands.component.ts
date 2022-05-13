import { Component, OnInit } from '@angular/core';
import { IBrand } from 'src/app/models/IBrand';
import { BrandService } from './../brand.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  brands:IBrand[];
  constructor(private brandsService:BrandService,private toasterService:ToastrService) {
    this.brands = [];
  }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandsService.getBrands().subscribe(data=>{
      this.brands = data;
    });
  }

  onDelete(id:number)
  {
    if(window.confirm("Are you sure you want to delete this item ??")){
      this.brandsService.deleteBrand(id).subscribe(data=>{
        this.toasterService.success("Deleted succesfully");
        this.brands.splice(this.brands.findIndex(p => p.id === id), 1);    
      });
    }
  }

}
