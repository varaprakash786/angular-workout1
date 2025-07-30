import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";


@Component({
    selector: 'app-child',
    imports:[],
    template: `
    <div class="childClass">
    <h2>Child Cmp</h2>

        <h5>{{parentTitle}}</h5>
        <button (click)="sendValues()"> Send Data </button>
    </div>    
    `,
    styles: `
    .childClass {color: green;border: 1px solid red;width: 900px;}
    h5 {border: 1px solid blue;width: 300px;padding: 2px;margin: 2px;}
    `
})

export class ChildComponent implements OnInit{

    @Input() parentTitle!:string;
    @Output() myEvent = new EventEmitter<string>;

    title = 'I from child page';

    ngOnInit(): void {
        
    }

    sendValues(){
        this.myEvent.emit(this.title)
    }

}