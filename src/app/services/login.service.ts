import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private user: string = "elmeste.88@gmail.com";
  private admin: boolean = true;
  private password: string = "123456";

  constructor(private router: Router) {}

  login(user: string, password: string): void{
    if(this.user === user && this.password === password){
      sessionStorage.setItem('user', 'logged');
      if(this.admin)
        sessionStorage.setItem('admin', 'true');
      else sessionStorage.setItem('admin', 'false');
      this.router.navigate(['/specialty']);
      
    } else {
      alert('Datos incorrectos');
    }
  }

  logout(): void{
    if(sessionStorage.getItem('user')){
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('admin');
      this.router.navigate(['/']);
    }
  }

  checkLoggedIn(): boolean{
    if(sessionStorage.getItem('user'))
      return true
    else 
      return false;
  }

  checkAdmin(): boolean{
    if(sessionStorage.getItem('user') && sessionStorage.getItem('admin') === "true")
      return true
    else
      return false
  }
}