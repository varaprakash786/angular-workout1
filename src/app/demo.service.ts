import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class DemoService {

    private prodInfo: BehaviorSubject<any> = new BehaviorSubject<any>('Krishna')

    getProdDetails(){
        return this.prodInfo;
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

}