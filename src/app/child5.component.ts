import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-child5',
    template:`<h2>Child5 Cmp</h2>
       <button (click)="increment()">Increment</button>
        <button (click)="decrement()">decrement</button>
        count: {{count}}
        
      
    `
})

export class Child5Component  {

//https://github.com/varaprakash786/angular-workout1
    


}