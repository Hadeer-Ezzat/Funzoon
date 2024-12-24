import { FormControl, FormGroup } from '@angular/forms';

export function IsValidId(control: FormControl): {[key: string]: boolean} {

    try {
        // Valid ID is any number greater than ZERO.
        if(control.value > 0){
            return { 'isValidId': true };
        }
    } catch (error) {
        console.log(error);
    }
    
    return null
}