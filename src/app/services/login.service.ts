import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, Observable } from 'rxjs';
import { User } from '../interfaces/user';

const URL = "https://62b613cd6999cce2e8feb474.mockapi.io/users";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private users!: User[];
  private user!: User | undefined;

  constructor(private router: Router,
              private http: HttpClient) {}

  private getAll(): Observable<User[]>{
    return this.http.get<User[]>(URL);
  }

  login(user: string, password: string): void{
    this.getAll().pipe(finalize(() => this.checkUser(user, password)))
                 .subscribe(data => this.users = data);
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

  private checkUser(email: string, password: string){
    this.getUser(email);
    if(this.user && this.user.password === password){
      sessionStorage.setItem('user', 'logged');
      if(this.user.admin)
        sessionStorage.setItem('admin', 'true');
      else sessionStorage.setItem('admin', 'false');
      this.router.navigate(['/specialty']);
      
    } else {
      alert('Datos incorrectos');
    }
  }

  private getUser(email: string){
    this.user = this.users.find(x => x.email === email);
  }
}