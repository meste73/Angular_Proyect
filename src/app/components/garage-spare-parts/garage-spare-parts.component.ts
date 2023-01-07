import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { LoginService } from '../../services/login.service';
import { SparePartsCartService } from '../../services/spare-parts-cart.service';
import { SparePartsListService } from '../../services/spare-parts-list.service';
import { SparePart } from '../../interfaces/spare-part';
import { SpinnerService } from 'src/app/services/spinner.service';

@Component({
  selector: 'app-garage-spare-parts',
  templateUrl: './garage-spare-parts.component.html',
  styleUrls: ['./garage-spare-parts.component.scss']
})

export class GarageSparePartsComponent implements OnInit {

  spareParts!: SparePart[];
  loading!: boolean;

  constructor(private sparePartsCart: SparePartsCartService, 
              private sparePartsList: SparePartsListService,
              private loginService: LoginService,
              private spinnerService: SpinnerService,
              private router: Router){
                this.spinnerService._loading.subscribe(data=>{
                  this.loading = data;
                })
              }

  ngOnInit(): void{
    this.getSpareParts();
  }

  getSpareParts(): void{
    this.spinnerService.setLoading(true);
    this.sparePartsList.getAll()
        .pipe(finalize(() => {
          this.spinnerService.setLoading(false);
          this.checkingStock();
        }))
        .subscribe(data => this.spareParts = data);
  }

  emptyCart(): void{
    this.sparePartsCart.emptyCart();
    this.ngOnInit();
  }

  serviceArraySize(): number{
    return this.sparePartsCart.arraySize();
  }

  checkingStock(): void{
    let auxSpareParts: SparePart[] = this.sparePartsCart.getSpareParts();
    for (let i = 0; i < this.spareParts.length; i++) {
      let sparePart: SparePart | undefined = this.spareParts.find(
        (sp) => sp.name == auxSpareParts[i].name
      );
      if(sparePart && sparePart.name ==  auxSpareParts[i].name)
        sparePart.stock -= auxSpareParts[i].quantity;
    }
  }

  checkLoggedIn(): boolean{
    if(!this.loginService.checkLoggedIn())
      this.router.navigate(['login']);
    return true;
  }
}
