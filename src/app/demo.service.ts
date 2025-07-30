import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DemoService {

    private prodInfo: BehaviorSubject<any> = new BehaviorSubject<any>('Krishna');
    private _todo = new BehaviorSubject<any>('');
    readonly todo$ = this._todo.asObservable();

    getProdDetails(){
        return this.prodInfo;
    }

    todoView(data: any){
        this._todo.next(data)
    }

    getList(){
    return[
      {'grade':1, 'name':'Davido', 'country':'Nigeria'},
      {'grade':2, 'name':'Burna Boy', 'country':'Nigeria'},
      {'grade':3, 'name':'Diamondz Platinum', 'country':'Tanzania'},
      {'grade':4, 'name':'Sarkodie', 'country':'Ghana'},
      {'grade':5, 'name':'Mr. Eazi', 'country':'Nigeria'}
    ];
  }

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