import { FormControl, FormGroup } from '@angular/forms';

export function IsStrongPassword(control: FormControl): {[key: string]: boolean} {

    let hasMinLength = control.value?.length >= 8
    let hasNumber = /\d/.test(control.value);
    let hasUpper = /[A-Z]/.test(control.value);
    let hasLower = /[a-z]/.test(control.value);

    let isValid = hasMinLength && hasNumber && hasUpper && hasLower;

    if(!isValid){
        return { 'isStrongPassword': true };
    }
    return null
}