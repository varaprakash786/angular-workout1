import { CommonModule } from '@angular/common'
import {Component, OnInit }from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { DemoService } from '../demo.service'


@Component({
    selector: 'app-product',
    imports:[CommonModule,RouterOutlet],
    standalone:true,
    templateUrl:'./product.component.html',
    styles:''

})

export class ProductComponent implements OnInit{

  constructor(private demoSer:DemoService){

  }
  products: any;

  ngOnInit(): void {
    this.products = this.demoSer.products;
    this.demoSer.todoView(this.products[1])
  }

  viewItem(item:any){
    this.demoSer.todoView(item)
  }

}




// {
//   "products" : [
    
//     {
//       "id": 4,
//       "title": "OPPOF19",
//       "description": "OPPO F19 is officially announced on April 2021.",
//       "price": 280
//     },
//     {
//       "id": 5,
//       "title": "Huawei P30",
//       "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
//       "price": 499
//     },
//     {
//       "id": 6,
//       "title": "MacBook Pro",
//       "description": "MacBook Pro 2021 with mini-LED display may launch between September, November",
//       "price": 1749
//     }]
// };