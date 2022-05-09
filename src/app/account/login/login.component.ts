import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from './../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!:FormGroup;
  constructor(private accountService:AccountService, private router:Router) {
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm()
  {
    this.loginForm = new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',Validators.required)
    });
  }

  onSubmit(ev:any)
  {
    ev.preventDefault();
    console.log(this.loginForm.value);
    this.accountService.logIn(this.loginForm.value).subscribe(()=>{
      console.log("logged in successfully");
      this.router.navigateByUrl('/');
    })
  }
}
