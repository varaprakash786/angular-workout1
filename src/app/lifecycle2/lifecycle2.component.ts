import { Component } from "@angular/core";
import { ChildComponent } from "../child/child.component";


@Component({
    selector: 'app-lifecycle2',
    imports:[ChildComponent],
    template: `
    <h2>Parent Cmp</h2>
    {{fromChild}}
        
        <app-child [parentTitle]="title" (myEvent)="onClick($event)"></app-child> 
       
    `,
    styles: ''
})

export class Lifecycle2Component {

    title = 'I from Parent page';
    fromChild!: string;

    onClick(data: any){
        this.fromChild = data;
    }

}