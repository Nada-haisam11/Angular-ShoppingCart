import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products :any = [];
  public greattotal!:number;

  constructor(private cart:CartService) { }

  ngOnInit(): void {
    this.cart.getproducts().subscribe(res=>{
      this.products = res;
      this.greattotal=this.cart.gettotalprice();
    })
  }


  removeitem(item:any){
    this.cart.removecart(item);
  }

  emptycart(){
    this.cart.removeall();
  }
}
