import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-child4',
    template:`<h2>Child4 Cmp</h2>

       current count is: {{count}}
        
      
    `
})

export class Child4Component  {


    count =0;

    increment(){
        this.count++
    }

    
    decrement(){
        this.count--
    }



}