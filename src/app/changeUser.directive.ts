import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[changeUser]'
})

export class ChangeUserDirective {
    constructor(Element: ElementRef){
        console.log(ElementRef)
        Element.nativeElement.innerText = "Username is changed by ChangeUser Directive"
    }
}