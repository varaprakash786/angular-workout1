import { Component, ElementRef, OnChanges, SimpleChange, SimpleChanges, TemplateRef, ViewChild } from "@angular/core";
import { Child6Component } from "../child6.component";



@Component({
    selector: 'app-parent4',
    imports:[Child6Component],
    template: `
    <h2>Parent4 Cmp</h2>
    <h5>ViewChild Examples</h5>
    <p>One of the use cases of ViewChild is to get the reference of the Child Component in the Parent Component 
        and manipulate its properties. This is one of the ways by which the Parent can communicate with the child components</p>
        <button (click)="increment()">Increment</button>
        <button (click)="decrement()">decrement</button>
        <app-child6></app-child6>
          <hr>
       <h5>Injecting HTML Element Using ElementRef</h5>
        <h2>Parent4 Cmp</h2>
        <pre>The Viewchild can also be used to query HTML elements.
    First, assign a Template variable (#para in the example below) to the HTML element. You can then use the ViewChild to query the element.
     ViewChild returns a ElementRef, which is nothing but a wrapper around the native HTML element.</pre>
        <p #para>Some text</p>
         <hr>
       <h5>Using Static Option in ViewChild</h5>
        <h2>Parent4 Cmp</h2>
        <pre>The static option determines the timing of the ViewChild query resolution.
        static:true will resolves ViewChild before any change detection is run.
        static:false will resolves it after every change detection run..</pre>
          <hr>
       <h5>Injecting TemplateRef</h5>
        <h2>Parent4 Cmp</h2>
        <ng-template #sayHelloTemplate>
            <p> Say Hello</p>
        </ng-template>
        <pre>The static option determines the timing of the ViewChild query resolution.
        static:true will resolves ViewChild before any change detection is run.
        static:false will resolves it after every change detection run..</pre>
        
    `,
    styles: ''
})

export class Parent4Component  {

    @ViewChild(Child6Component, {static:true}) child!: Child6Component;
    @ViewChild('para', {static: false}) para!: ElementRef;
    @ViewChild('sayHelloTemplate',{static: false}) tempRef!: TemplateRef<any>;

    title = 'I from Parent page';
    Counter =5;

    ngAfterViewInit(){
        this.para.nativeElement.innerText = 'Krishna'
        console.log(this.tempRef.elementRef)
    }

    increment(){
        this.child.increment()
    }

    
    decrement(){
        this.child.decrement()
    }

   
    

}