import { Component } from "@angular/core";
import { ProductComponent } from "../products/product.component";
import { RouterLink, RouterModule, RouterOutlet } from "@angular/router";

@Component({
    selector: 'app-dashboard',
    imports:[RouterOutlet,RouterLink,RouterModule],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css'
})

export class DashboardComponent {

}