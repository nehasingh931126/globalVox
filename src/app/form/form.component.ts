import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,
    Validators,
    AbstractControl, 
    ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
export class CustomValidators {

    public static pattern(reg: RegExp) : ValidatorFn {
        return (control: AbstractControl): { [key: string]: any } => {
            var value = <string>control.value;
            return value.match(reg) ? null : { 'pattern': { value } };
        }
    }
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  public hide = true;
  public detailsForm: FormGroup;
  pattern = /[A-Z][$@#*'][0-9]/;
  public isSuccess = false;
  constructor(private formBuilder: FormBuilder, private _router: Router) {}

  public ngOnInit(): void {
    this.isSuccess = false;
    this.detailsForm = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      passwords: this.formBuilder.group({
        password: new FormControl('', {validators:[Validators.required,
          Validators.minLength(8), Validators.maxLength(60)],
          updateOn: 'blur'}
        ),
        confirmpassword: new FormControl(null, 
          {validators: [Validators.required], updateOn: 'blur'}),
      }, {validator: this.checkPasswords}),
      dob: new FormControl(new Date()),
      gender: new FormControl('', [Validators.required])
    } );
  }

  public onSubmit(value): void{
    console.log(value);
    const listData = JSON.parse(localStorage.getItem('listData'));
    value['position'] = listData.length+1;
    listData.push(value);
    localStorage.setItem('listData', JSON.stringify(listData));
    this._router.navigate(['/', 'listingSection']);
    this.isSuccess = true;
  }

  public checkPasswords(group: FormGroup) { // here we have the 'passwords' group
  const pass = group.get('password').value;
  const confirmPass = group.get('confirmpassword').value;
  return pass === confirmPass ? null : { notSame: true };
  }

  public onCancel() {
    this._router.navigate(['/', 'listingSection']);
  }

  
}
