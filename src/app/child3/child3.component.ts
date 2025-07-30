import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-child3',
    template:`<h2>Child3 Cmp</h2>
       <button (click)="increment()">Increment</button>
        <button (click)="decrement()">decrement</button>
        count: {{count}}
        
      
    `
})

export class Child3Component  {

    @Output() countChanged = new EventEmitter();

    count =5;

    increment(){
        this.countChanged.emit(this.count++)
    }

    
    decrement(){
        this.countChanged.emit(this.count--)
    }



}