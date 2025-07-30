import { Component, EventEmitter, Output, ViewChild } from "@angular/core";
import { Child3Component } from "../child3/child3.component";
import { Child4Component } from "../child4/child4.component";
import { Child5Component } from "../child5.component";



@Component({
    selector: 'app-parent3',
    imports:[Child3Component,Child4Component,Child5Component],
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
         <hr>
       <h5>Parent uses a @ViewChild() to get reference to the Child Component</h5>
        <h2>Parent3 Cmp</h2>
        <p>Injecting an instance of the child component into the parent as a @ViewChild is 
        the another technique used by the parent to access the property and method of the child component</p>
        <p>The @ViewChild decorator takes the name of the component/directive as its input. It is then used to decorate a property. The Angular then injects the reference of the component to the Property</p>   
        <p> current count is {{child5.count}} </p>
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">decrement</button>
         <app-child5></app-child5>
        
    `,
    styles: ''
})

export class Parent3Component  {

    title = 'I from Parent page';
    cnt: number = 0;
    
    getCount(data: any){
        this.cnt = data;
    }

    @ViewChild(Child5Component) child5!: Child5Component;
 
  increment() {
    this.child5.increment();
  }
 
  decrement() {
    this.child5.decrement();
  }

    

   
    

}