import { Component, EventEmitter, Output } from "@angular/core";
import { Child3Component } from "../child3/child3.component";
import { Child4Component } from "../child4/child4.component";



@Component({
    selector: 'app-parent3',
    imports:[Child3Component,Child4Component],
    template: `
     <h5>Passing data to parent component Via Events (Example)</h5>
    <h2>Parent3 Cmp</h2>
        {{cnt}}
       <app-child3 (countChanged)=getCount($event)></app-child3>
       <hr>
       <h5>Parent uses local variable to access the Child in Template</h5>
        <h2>Parent3 Cmp</h2>
        <p> can use the local variable #child elsewhere in the template to refer to the child component methods and properties as shown below</p>
        <p> current count is {{child.count}} </p>
        <button (click)="child.increment()">Increment</button>
        <button (click)="child.decrement()">decrement</button>
        <app-child4 #child></app-child4>
       
    `,
    styles: ''
})

export class Parent3Component  {

    title = 'I from Parent page';
    cnt: number = 0;
    
    getCount(data: any){
        this.cnt = data;
    }

   
    

}