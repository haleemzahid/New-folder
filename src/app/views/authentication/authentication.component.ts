import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  loginForm: FormGroup | any;
  title = 'material-login';
  hide = true;
  color: ThemePalette = 'accent';
  checked = true;
  constructor(
    private router:Router,
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required,Validators.pattern(
        '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
      )]),
      remember:new FormControl('')
    });
   }
  ngOnInit(): void {
  }


  authenticateUser(){
    if(!this.loginForm.valid){
      return;
    }


    if(this.loginForm.get('email').value.length > 0 &&
      this.loginForm.get('password').value.length > 0)
    {
      this.router.navigate(['/home']);
    }
  }
}
