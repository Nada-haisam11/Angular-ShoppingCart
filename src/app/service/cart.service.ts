import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItem : any = [];
  public productList = new BehaviorSubject<any>([]);

  constructor() { }

  getproducts(){
    return this.productList.asObservable();
  }

  setproducts(product:any){
    this.cartItem.push(...product);
    this.productList.next(product);
  }

  addtocart(product:any){
    this.cartItem.push(product);
    this.productList.next(this.cartItem);
    this.gettotalprice();
    console.log(this.cartItem)
  }

  gettotalprice() :number{
    let total = 0;
    this.cartItem.map((a:any)=>{
      total += a.total;
    })
    return total
  }

  removecart(product:any){
    this.cartItem.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItem.splice(index,1);
      }
    })
  }

  removeall(){
    this.cartItem = []
    this.productList.next(this.cartItem);
  }

}
