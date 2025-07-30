import { Component, OnChanges, SimpleChange, SimpleChanges } from "@angular/core";
import { ChildComponent } from "../child/child.component";
import { Child2Component } from "../child2/child2.component";


@Component({
    selector: 'app-parent2',
    imports:[Child2Component],
    template: `
    <h2>Parent2 Cmp</h2>
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">decrement</button>
        <app-child2 [myCount]="Counter"></app-child2>
       
    `,
    styles: ''
})

export class Parent2Component  {

    title = 'I from Parent page';
    Counter =5;

    increment(){
        this.Counter++
    }

    
    decrement(){
        this.Counter--
    }

   
    

}