import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-child5',
    template:`<h2>Child5 Cmp</h2>
       current count is {{ count }}
        
      
    `
})

export class Child5Component  {

//https://github.com/varaprakash786/angular-workout1
    
count = 0;
 
     increment() {
        this.count++;
      }
    decrement() {
        this.count--;
    }


}