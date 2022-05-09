import { Component, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'admin_dashboard';
  sideBarOpen = true;


  constructor(private accountService:AccountService) {
    
  }
  ngOnInit(): void {
    this.loadCurrentUser();
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  loadCurrentUser()
  {
    let token = localStorage.getItem('token');
    if(token){
      this.accountService.loadCurrentUser(token).subscribe(()=>{
        console.log("loaded successfully");       
      }, error=>{
        console.log(error);
      }
      )
    }
  }
}
