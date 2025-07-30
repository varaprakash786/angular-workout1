import { Component, OnChanges, QueryList, SimpleChange, SimpleChanges, ViewChildren } from "@angular/core";
import { ChildComponent } from "../child/child.component";
import { Child2Component } from "../child2/child2.component";
import { FormsModule, NgModel } from "@angular/forms";


@Component({
    selector: 'app-parent2',
    imports:[Child2Component,FormsModule],
    template: `
    <h2>Parent2 Cmp</h2>
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">decrement</button>
        <app-child2 [myCount]="Counter"></app-child2>

                 <hr>
       <h5>ViewChildren</h5>
        <h2>Parent2 Cmp</h2>
      
        <pre>ViewChildren decorator is used to getting the list of element references from the View.
ViewChildren is different from the ViewChild. ViewChild always returns the reference to a single element. 
If there are multiple elements the ViewChild returns the first matching element,
ViewChildren always returns all the elements as a QueryList.</pre>

 <input type="text" name="firstName" [(ngModel)]="firstName" />
       <input type="text" name="midlleName" [(ngModel)]="middleName">
       <input type="text" name="lastName" [(ngModel)]="lastName" />
        <button (click)="show()">Show</button>
       
    `,
    styles: ''
})

export class Parent2Component  {


     @ViewChildren(NgModel) modelRefList!: QueryList<NgModel>;
     
  firstName!: string;
  middleName!: string;;
  lastName!: string;;
    title = 'I from Parent page';
    Counter =5;

      show() {
 
    this.modelRefList.forEach(element => {
      console.log(element)
      //console.log(element.value)
    });
  }

    increment(){
        this.Counter++
    }

    
    decrement(){
        this.Counter--
    }

   
    

}