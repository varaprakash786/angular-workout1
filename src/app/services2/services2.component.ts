import { Component, inject } from "@angular/core";

import { CommonModule } from "@angular/common";

import { Observable } from "rxjs";
import { Demo2Service } from "../demo2.services";
import { toObservable, toSignal } from "@angular/core/rxjs-interop";
import { HttpClient } from "@angular/common/http";

@Component({
    selector:'app-services2',
    imports: [CommonModule],
    providers: [],
    standalone: true,
    template: `
    <h2>Services2 Cmp</h2>
     
    <ng-container *ngFor="let request of itemvalues">
        <h6>{{ request.username }}</h6>
     </ng-container>
    `
})

export class Services2Component{
    constructor(private demoSer2: Demo2Service){

    }
    itemvalues!: any;
    //myObservable: Observable<Object | undefined> = toObservable(mySignal);

    ngOnInit(){
      this.demoSer2.getData().subscribe((res) => {
        this.itemvalues = res;
      });
    }
}