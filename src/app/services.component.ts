import { Component } from "@angular/core";
import { DemoService } from "./demo.service";
import { CommonModule } from "@angular/common";
import { Demo2Service } from "./demo2.services";
import { Observable } from "rxjs";

@Component({
    selector:'app-services',
    imports: [CommonModule],
    providers: [],
    standalone: true,
    template: `
    <h2>Services Cmp</h2>
    <ul *ngFor="let item of itemList">
        <li>{{item.name}}</li>    
    </ul>   
    <hr>
     
    <ng-container *ngFor="let request of itemvalues | async">
        <h6>{{ request.username }}</h6>
     </ng-container>
    `
})

export class ServicesComponent{
    constructor(private demoSer:DemoService,private demoSer2: Demo2Service){

    }
    itemList: any;
    itemvalues!: Observable<any>;

    ngOnInit(){
        this.itemList = this.demoSer.getList();
        this.itemvalues = this.demoSer2.getData();
    }
}