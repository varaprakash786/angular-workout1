import { PipeTransform ,Pipe} from "@angular/core";

@Pipe({
    name: 'lengthPipe'
})

export class LengthCalPipe implements PipeTransform{

    transform(value: string) {
        return value.length;
    }
}