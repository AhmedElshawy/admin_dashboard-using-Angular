import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-category-pic',
  templateUrl: './edit-category-pic.component.html',
  styleUrls: ['./edit-category-pic.component.scss']
})
export class EditCategoryPicComponent implements OnInit {

  selectedPhoto:any;
  TypeId:string;

  constructor(private http:HttpClient,
            private route: ActivatedRoute,
            private router: Router
    ) { 
      this.TypeId = '';
    }

  ngOnInit(): void {
    this.TypeId = this.route.snapshot.paramMap.get("id")!.toString();
  }

  onPhotoSelected(event:any){
    this.selectedPhoto = event.target.files[0];
  }

  uploadPhoto(){
    const fd = new FormData();
    fd.append('typeImg',this.selectedPhoto, this.selectedPhoto.name);
    this.http.put(`https://localhost:7213/api/types/photoTypeEdit/${this.TypeId}`,fd).subscribe(res=>{
      this.router.navigate([`catigories`]);
    });
  }

}
