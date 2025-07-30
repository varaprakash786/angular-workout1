import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-child6',
    template:`<h2>Child6 Cmp</h2>
       current count is {{ count }}
        
      
    `
})

export class Child6Component  {

//https://github.com/varaprakash786/angular-workout1
    
count = 0;
 
     increment() {
        this.count++;
      }
    decrement() {
        this.count--;
    }


}