import { Component, OnInit } from '@angular/core';
import { UserLoginDto } from 'src/app/core/dtos';
import { 
  LoginService, 
  UnsucceedResponseHandlerService,
  AppGlobalRouterService } from 'src/app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControlErrorsEnum } from 'src/app/core/enums';
import { FormValidator } from '../../_helpers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorType = FormControlErrorsEnum
  formValidator: FormValidator
  isLoading: boolean = false

  constructor(private loginService: LoginService,
    private unsucceedResponseHandlerService: UnsucceedResponseHandlerService,
    private appGlobalRouterService: AppGlobalRouterService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formInit()
    this.formValidator = new FormValidator(this.loginForm)
  }

  get form(){ return this.loginForm.controls; }

  formInit(){
    this.loginForm = this.formBuilder.group({
        userNameOrEmail: ['', Validators.required],
        password: ['', [Validators.required]],
        keepLoggedIn: [false, []]
    });
  }

  login(){

    // this.loginService.showMessage();
    this.formValidator.isSubmitted = true
    if (this.loginForm.invalid) {
      return; // stop here if form is invalid
    }

    this.isLoading = true
    this.loginService.logIn(this.credentials).subscribe(response => {
      if(response.isSucceeded){
        this.appGlobalRouterService.navigateToHomePage()
      }
      else{
        this.unsucceedResponseHandlerService.handleUnsucceedResponse(response)
      }
      this.isLoading = false
    })
  }

  // https://next.angular.io/guide/deprecations#deprecated-features
  get credentials(): UserLoginDto{
    return {
      userNameOrEmail:  this.loginForm.get('userNameOrEmail').value,
      password:         this.loginForm.get('password').value,
    }
  }

  redirectToRegister(){
    this.appGlobalRouterService.navigateToRegisterPage()
  }

}
