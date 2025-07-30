import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appSubtitle]'
})

export class SubtitleDirective {
    constructor(private _eleRef: ElementRef,private _renderer: Renderer2){}

    @HostListener('mouseenter') onHover(){
        this._eleRef.nativeElement.innerText = 'Krishna'
        this._renderer.setStyle(this._eleRef.nativeElement, 'background-color', 'red')
    }

    
    @HostListener('mouseleave') onLeave(){
        this._eleRef.nativeElement.innerText = 'Krishna'
        this._renderer.setStyle(this._eleRef.nativeElement, 'background-color', 'green')
    }
}