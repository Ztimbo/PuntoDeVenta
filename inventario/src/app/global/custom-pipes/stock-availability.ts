import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'StockAvailability' })

export class StockAvailability implements PipeTransform {
    transform(value: number): string {
        let returnValue: string = '';

        switch(true) {
            case value <= 5 && value > 0:
                returnValue = 'POR AGOTARSE';
                break;
            case value == 0:
                returnValue = 'AGOTADO';
                break;
            default:
                returnValue = value.toString()
                break;
        }

        return returnValue;
    }
}