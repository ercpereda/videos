import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'summary'
})
export class SummaryPipe implements PipeTransform {
    transform(value: string, limit: string) {
        let l = parseInt(limit);
        if (value.length > l) {
            return value.slice(0, l) + '...';
        }
        return value;
    }
}
