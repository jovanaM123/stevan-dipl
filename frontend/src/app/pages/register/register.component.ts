import { AccountService } from './../../services/account.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserCreate } from 'src/app/interfaces/UserCreate';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl(''),
  });
  public message: string = '';

  constructor(private _accountService: AccountService) {}

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl(''),
    });
  }

  public validateControl = (controlName: string) => {
    return (
      this.registerForm.controls[controlName].invalid &&
      this.registerForm.controls[controlName].touched
    );
  };

  public hasError = (controlName: string, errorName: string) => {
    return this.registerForm.controls[controlName].hasError(errorName);
  };

  public registerUser = async (registerFormValue: any) => {
    this.message = '';
    const formValues = { ...registerFormValue };

    if (formValues !== null || formValues !== undefined) {
      // check if email already exists
      if (await !this._accountService.isEmailExists(formValues.email)) {
        this.message = "Email already exists."
        return;
      }

      // check passwords
      if (formValues.confirmPassword !== formValues.password) {
        this.message = "Password are not same."
        return;
      }


      var user: UserCreate = {
        firstname: formValues.firstName,
        lastname: formValues.lastName,
        email: formValues.email,
        password: formValues.password,
        isAdmin: false,
      };

      this._accountService.registerUser(user).subscribe((data) => {
        if (data === 'successfully') {
          this.message = 'Successfull registration';
        } else {
          this.message = 'Error during registration, please try again.';
        }
      });
    }
  };

}
