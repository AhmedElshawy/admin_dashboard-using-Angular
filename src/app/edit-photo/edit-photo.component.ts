import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-photo',
  templateUrl: './edit-photo.component.html',
  styleUrls: ['./edit-photo.component.scss']
})
export class EditPhotoComponent implements OnInit {

  selectedPhoto:any;
  productId:string;

  constructor(private http:HttpClient,
            private route: ActivatedRoute,
            private router: Router
    ) { 
      this.productId = '';
    }

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get("id")!.toString();
  }

  onPhotoSelected(event:any){
    this.selectedPhoto = event.target.files[0];
  }

  uploadPhoto(){
    const fd = new FormData();
    fd.append('productImg',this.selectedPhoto, this.selectedPhoto.name);
    this.http.put(`https://localhost:7213/api/products/${this.productId}/photo`,fd).subscribe(res=>{
      this.router.navigate([`products`]);
    });
  }
}
