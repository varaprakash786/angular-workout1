import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
    selector: 'app-child2',
    template:`<h2>Child2 Cmp</h2>
        current count is {{count}}
    `
})

export class Child2Component  implements OnChanges {
    @Input('myCount') count!: number;

     ngOnChanges(changes: SimpleChanges){
        for(let property in changes){
            if(property === 'count'){
                console.log('Previous:', changes[property].previousValue);
                  console.log('Current:', changes[property].currentValue);
                 console.log('firstChange:', changes[property].firstChange);
            }
        }
    }


}