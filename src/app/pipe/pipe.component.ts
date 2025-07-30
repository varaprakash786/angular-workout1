import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { LengthCalPipe } from "../lengthpipe.pipe";

@Component({
    selector: 'app-pipecmp',
    imports:[CommonModule, LengthCalPipe],
    template: `<h2>Pipe Cmp</h2>
    <p>Uppercase :{{msg | uppercase}} </p>
    <p>CustomPipe length:{{msg | lengthPipe}} </p>
    `
})

export class PipeComponent {
     msg: string= 'Welcome to Angular';

}