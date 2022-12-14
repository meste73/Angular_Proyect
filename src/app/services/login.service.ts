import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { finalize, Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { SpinnerService } from './spinner.service';

const URL = "https://62b613cd6999cce2e8feb474.mockapi.io/users";

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private users!: User[];
  private user!: User | undefined;

  constructor(private router: Router,
              private http: HttpClient,
              private _snackBar: MatSnackBar,
              private spinnerService: SpinnerService) {}
  
  //Get all users from API
  private getAll(): Observable<User[]>{
    return this.http.get<User[]>(URL);
  }

  //Main login function
  login(user: string, password: string): void{
      this.getAll().pipe(finalize(() => this.checkUser(user, password)))
                   .subscribe(data => this.users = data);
  }

  //Logout function
  logout(): void{
    if(sessionStorage.getItem('user')){
      sessionStorage.removeItem('user');
      sessionStorage.removeItem('admin');
      this.router.navigate(['/']);
    }
    this.spinnerService.setLoading(false);
  }

  //Check if user is already logged
  checkLoggedIn(): boolean{
    if(sessionStorage.getItem('user'))
      return true
    else {
      return false;
    }
  }

  //Check if the user logged is an admin
  checkAdmin(): boolean{
    if(sessionStorage.getItem('user') && sessionStorage.getItem('admin') === "true")
      return true
    else
      return false
  }


  //Check user data for login
  private checkUser(email: string, password: string){
    this.getUser(email);
    if(this.user && this.user.password === password){
      this.spinnerService.setLoading(true);
      setTimeout(() => {
        sessionStorage.setItem('user', 'logged');
        if(this.user && this.user.admin)
          sessionStorage.setItem('admin', 'true');
        else 
          sessionStorage.setItem('admin', 'false');
        this.router.navigate(['/']);
        this._snackBar.open("Usted se ha logueado como " + this.user?.name, 'close',{
          duration: 5000,
          horizontalPosition: 'center',
          verticalPosition: 'top'
        });
      }, 1500)
    } else {
      this.showError();
    }
  }

  //Obtain a particular user from an array
  private getUser(email: string){
    this.user = this.users.find(x => x.email === email);
  }

  //Shows a snackbar with an error message
  private showError(){
    this._snackBar.open("Usuario o contrase??a incorrectos", 'close',{
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}