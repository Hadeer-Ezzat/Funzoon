import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { LocalStorageConstants } from '../../core/constants';
import { FunzoonToken, User } from '../../core/models';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
    
  isTokenExpired() {    
    return (Date.now() >= this.getFunzoonToken().exp * 1000)? false : true
  }

  isTokenExist(): boolean{
    try{
      return jwtDecode<FunzoonToken>(this.getToken())? true : false
    }catch(ex){
      console.error(`TokenService -> isTokenExist(): boolean`)
      console.error(ex)
      return false
    }
  }

  saveToken(token:string) { 
    localStorage.setItem(LocalStorageConstants.token, token) 
  }

  deleteToken() { 
    localStorage.removeItem(LocalStorageConstants.token) 
  }

  getToken() {
    return localStorage.getItem(LocalStorageConstants.token)
  }

  private getFunzoonToken(){
    return jwtDecode<FunzoonToken>(this.getToken())
  }

  getUser(): User{    
    const funzoonToken: FunzoonToken = this.getFunzoonToken()
    Object.setPrototypeOf(funzoonToken, FunzoonToken.prototype);
    return funzoonToken? funzoonToken.getUserInfo() : null
  }
  
}
