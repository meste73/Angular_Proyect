import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  private user: string = "elmeste.88@gmail.com";
  private password: string = "123456";

  constructor(private router: Router) {}

  login(user: string, password: string): void{
    if(this.user === user && this.password === password){
      sessionStorage.setItem('admin', 'logged');
      this.router.navigate(['/specialty']);
      
    } else {
      alert('Datos incorrectos');
    }
  }

  checkLoggedIn(): boolean{
    if(sessionStorage.getItem('admin')) 
      return true
    else 
      return false;
  }
}