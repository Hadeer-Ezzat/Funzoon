import { Component, OnInit } from '@angular/core';
import { UserLoginDto, UserRegisterDto } from 'src/app/core/dtos';
import { 
  AppGlobalRouterService, 
  LoginService, 
  RegisterService, 
  UnsucceedResponseHandlerService } from 'src/app/services';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MustMatch, IsStrongPassword, FormValidator } from '../../_helpers';
import { FormControlErrorsEnum } from 'src/app/core/enums';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  errorType = FormControlErrorsEnum
  formValidator: FormValidator
  isLoading: boolean = false

  constructor(
    private loginService: LoginService,
    private registerService: RegisterService,
    private unsucceedResponseHandlerService: UnsucceedResponseHandlerService,
    private appGlobalRouterService: AppGlobalRouterService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formInit()
    this.formValidator = new FormValidator(this.registerForm)
  }

  get form(){ return this.registerForm.controls; }

  formInit(){
    this.registerForm = this.formBuilder.group({
        firstName:       ['', Validators.required],
        lastName:        ['', Validators.required],
        userName:        ['', Validators.required],
        email:           ['', [Validators.required, Validators.email]],
        dateOfBirth:     ['', Validators.required],
        phoneNumber:     ['', [Validators.required, Validators.required]],
        zipCode:         ['', Validators.required],
        password:        ['', [Validators.required, IsStrongPassword]],
        confirmPassword: ['', Validators.required],
        acceptTerms:     [false, Validators.requiredTrue]
    }, {
        validator: MustMatch('password', 'confirmPassword')
    });
  }

  register(){
    this.formValidator.isSubmitted = true

    if (this.registerForm.invalid) {
      return; // stop here if form is invalid
    }

    this.isLoading = true
    this.registerService.register(this.userDetails).subscribe(response => {
      if(response.isSucceeded){

        const credentials: UserLoginDto = {
          userNameOrEmail: this.userDetails.email,
          password: this.userDetails.password
        }

        this.loginService.logIn(credentials).subscribe(response => {
          if(response.isSucceeded){
            this.appGlobalRouterService.navigateToHomePage()
          }
          else{
            this.unsucceedResponseHandlerService.handleUnsucceedResponse(response)
          }
          this.isLoading = false
        })
        
      }
      else{
        this.unsucceedResponseHandlerService.handleUnsucceedResponse(response)
        this.isLoading = false
      }
    })

  }

  // https://next.angular.io/guide/deprecations#deprecated-features
  get userDetails(): UserRegisterDto{
    return {
      firstName:    this.registerForm.get('firstName').value,
      lastName:     this.registerForm.get('lastName').value,
      email:        this.registerForm.get('email').value,
      userName:     this.registerForm.get('userName').value,
      password:     this.registerForm.get('password').value,
      phoneNumber:  this.registerForm.get('phoneNumber').value,
      dateOfBirth:  this.registerForm.get('dateOfBirth').value,
      zipCode:      this.registerForm.get('zipCode').value
    }
  }

  redirectToLogin(){
    this.appGlobalRouterService.navigateToLoginPage()
  }

}
