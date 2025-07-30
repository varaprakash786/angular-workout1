import { Component } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { DemoService } from "../demo.service";

@Component({
    selector:'app-prodDesc',
    template:`<h4>Prod Details</h4>
        <h5>{{itemValue.title}}</h5>
        <h5>{{itemValue.description}}</h5>
    `,
    styles:''

})

export class ProdDescComponent {

    subject$ = new BehaviorSubject("0");

    itemValue: any;


    constructor(private demoSer: DemoService){
        
    }

    ngOnInit(){
        this.subject$.subscribe((val) => {
            console.log("Sub1. ", val)
        })
        this.subject$.next("1");
        this.subject$.next("2");

        this.subject$.subscribe(val => {
      console.log("sub2 " + val);
    });
 
    this.subject$.next("3");
    this.subject$.complete();

        this.demoSer.todo$.subscribe((val) =>{
            this.itemValue = val;
        } )
  
    }

}