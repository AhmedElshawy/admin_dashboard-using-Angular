import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from './../../account/account.service';
import { IUser } from './../../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();
  currentUser$!:Observable<IUser>

  constructor(private router: Router, private accountService:AccountService) {}

  ngOnInit(): void {
    this.currentUser$ = this.accountService.currentUser$
    console.log(this.currentUser$);
  }

  toggleSidebar() {
    this.toggleSidebarForMe.emit();
  }

}
