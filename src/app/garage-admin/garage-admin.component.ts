import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-garage-admin',
  templateUrl: './garage-admin.component.html',
  styleUrls: ['./garage-admin.component.scss']
})
export class GarageAdminComponent {

  user!: string;
  password!: string;

  constructor(private adminService: AdminService,
              private router:Router){}

  login():void{
    this.adminService.login(this.user, this.password);
  }

  logout(): void{
    if(sessionStorage.getItem('admin')){
      sessionStorage.removeItem('admin');
      this.router.navigate(['/']);
    }
  }
}
