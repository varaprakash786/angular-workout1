import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './products/product.component';
import { ProdDescComponent } from './prod-desc/prod-desc.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contacts/contacts.component';
import { ParentComponent } from './parent/parent.component';
import { DirectiveComponent } from './directives/directive.component';
import { ServicesComponent } from './services.component';
import { Services2Component } from './services2/services2.component';
import { PipeComponent } from './pipe/pipe.component';
import { Parent2Component } from './parent2/parent2.component';
import { Parent3Component } from './parent3/parent3.component';
import { Parent4Component } from './parent4/parent4.component';
import { Lifecycle1Component } from './lifecycle1/lifecycle1.component';
import { Lifecycle2Component } from './lifecycle2/lifecycle2.component';

export const routes: Routes = [
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    {path: 'dashboard', component: DashboardComponent,
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'product', component: ProductComponent,
                 children: [
                    {path: '', redirectTo: 'prodDesc', pathMatch: 'full'},
                    {path: 'prodDesc', component: ProdDescComponent}
                    ]   
            },
            {path: 'home', component: HomeComponent},
             {path: 'contact', component: ContactComponent},
              {path: 'parent', component: ParentComponent},
               {path: 'parent2', component: Parent2Component},
               {path: 'parent3', component: Parent3Component},
               {path: 'parent4', component: Parent4Component},
              {path: 'directive', component: DirectiveComponent},
              {path: 'services', component: ServicesComponent},
               {path: 'services2', component: Services2Component},
                 {path: 'lifecycle1', component: Lifecycle1Component},
                   {path: 'lifecycle2', component: Lifecycle2Component},
                {path: 'pipe', component: PipeComponent}
        ]
    },
    

];
