import { Component } from "@angular/core";
import { ChildComponent } from "../child/child.component";
import { ChangeUserDirective } from "../changeUser.directive";
import { HighLightColorDirective } from "../highlight.directive";
import { SubtitleDirective } from "../subtitle.directive";


@Component({
    selector: 'app-directive',
    imports:[ChangeUserDirective,HighLightColorDirective,SubtitleDirective],
    template: `
    <h2>Directive Cmp</h2>
    <div style="text-align:center;">
        <span changeUser=""> User: {{title}}</span>
    </div>
    <p highlightcolor>This is first paragraph</p>
    <p appSubtitle>This is the second paragraph</p>
    
       
    `,
    styles: ''
})

export class DirectiveComponent {

    title = 'I from Parent page';
    

}