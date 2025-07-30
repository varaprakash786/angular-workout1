import { CommonModule } from '@angular/common'
import {Component }from '@angular/core'
import { RouterOutlet } from '@angular/router'


@Component({
    selector: 'app-product',
    imports:[CommonModule,RouterOutlet],
    standalone:true,
    templateUrl:'./product.component.html',
    styles:''

})

export class ProductComponent {

    products = [
        {
      "id": 1,
      "title": "iPhone 9",
      "description": "An apple mobile which is nothing like apple",
      "price": 549
    },
    {
      "id": 2,
      "title": "iPhone X",
      "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
      "price": 899
    },
    {
      "id": 3,
      "title": "Samsung Universe 9",
      "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
      "price": 1249
    }
    ]
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