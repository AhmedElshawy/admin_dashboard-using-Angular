import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject} from 'rxjs';
import { IUser } from './../models/user';
import {map} from 'rxjs/operators'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseUrl = environment.apiUrl;
  private currentUserSourse = new BehaviorSubject<IUser>(null!);
  currentUser$ = this.currentUserSourse.asObservable();

  constructor(private http:HttpClient , private router:Router) { }

  getCurrentUserValue()
  {
    return this.currentUserSourse.value;
  }


  loadCurrentUser(token:string)
  {
    let headers = new HttpHeaders();
    headers = headers.set('authorization', `Bearer ${token}`);
    
    return this.http.get<IUser>(this.baseUrl + 'account' , {headers}).pipe(
      map((user:IUser)=>{
        if(user){
          localStorage.setItem('token', user.token);
          this.currentUserSourse.next(user);
        }
        
      })
    )
  }

  logIn(values:any)
  {
    return this.http.post<IUser>(this.baseUrl + 'account/login',values).pipe(
     map((user:IUser)=>{
      if(user){
        localStorage.setItem('token',user.token);
        this.currentUserSourse.next(user);
      }
     })
    );
  }

  logOut()
  {
    localStorage.removeItem('token');
    this.currentUserSourse.next(null!);
    this.router.navigateByUrl('account/login');
  }
}