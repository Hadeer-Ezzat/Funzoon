import { FormGroup } from '@angular/forms';

export class FormValidator{

    isSubmitted: boolean = false
    form: FormGroup

    constructor(formGroup: FormGroup){
        this.form = formGroup
    }

    hasRequiredFieldError(field: string){
        return this.isSubmitted && !this.form.get(field).valid && this.form.get(field).errors.required
    }
    
    hasMustMatchFieldError(field: string){
        return this.isSubmitted && !this.hasRequiredFieldError(field) && !this.form.get(field).valid && this.form.get(field).errors.mustMatch
    }
    
    hasStrongPasswordFieldError(field: string){
        return this.isSubmitted && !this.hasRequiredFieldError(field) && !this.form.get(field).valid && this.form.get(field).errors.isStrongPassword
    }
    
    hasEmailFieldError(field: string){
        return this.isSubmitted && !this.hasRequiredFieldError(field) && !this.form.get(field).valid && this.form.get(field).errors.email
    }
}