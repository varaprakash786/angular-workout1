import { Component } from "@angular/core";


@Component({
    selector: 'app-lifecycle1',
    imports:[],
    template: `
    <h2>Parent Cmp</h2>
      <hr>
       <h5>Angular lifecycle hooks</h5>
        <h2>Parent4 Cmp</h2>
        <ng-template #sayHelloTemplate>
            <p> Say Hello</p>
        </ng-template>
        <p> life cycle hooks, which angular invokes during the component life cycle. Angular invokes them when a specific event occurs</p>
        <pre>ngOnChanges
ngOnInit
ngDoCheck
ngAfterContentInit
ngAfterContentChecked
ngAfterViewInit
ngAfterViewChecked
ngOnDestroy</pre>
    `,
    styles: ''
})

export class Lifecycle1Component {

    title = 'I from Parent page';
    fromChild!: string;

    onClick(data: any){
        this.fromChild = data;
    }

}