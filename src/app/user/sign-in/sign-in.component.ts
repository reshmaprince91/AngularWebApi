import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/user.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoginError : boolean = false;
  constructor(private userService : UserService,
    private router : Router) { }

  ngOnInit(){
  }
  OnSubmit(UserName,Password){
    this.userService.userAuthentication(UserName,Password)
    .subscribe((data : any)=>{
    localStorage.setItem('usertoken',data.access_token);
    this.router.navigate(['/quotes']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true
    }); 
  }

}
