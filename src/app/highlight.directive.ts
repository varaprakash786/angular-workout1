import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[highlightcolor]'
})

export class HighLightColorDirective {
    constructor(private EleRef: ElementRef){
        
    }
    @HostListener('mouseover') onMouseOver(){
            this.EleRef.nativeElement.style.color = 'red';

    }

     @HostListener('mouseleave') onMouseLeave(){
             this.EleRef.nativeElement.style.color = 'green';
    }
}