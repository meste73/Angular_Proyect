import { Component } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-garage-admin',
  templateUrl: './garage-admin.component.html',
  styleUrls: ['./garage-admin.component.scss']
})
export class GarageAdminComponent {

  user!: string;
  password!: string;

  constructor(private adminService: AdminService){}

  login(){
    this.adminService.login(this.user, this.password);
    console.log(sessionStorage.getItem('admin'));
  }
}
