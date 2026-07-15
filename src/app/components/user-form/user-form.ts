import { Component, output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import type { UserFormInterface } from '../../models/userForm';

@Component({
  selector: 'app-user-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',

})
export class UserForm {
  
  userForm: FormGroup;
  
  onSubmitBudget = output<UserFormInterface>();

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{9}$')]],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  submitForm() {
    if (this.userForm.valid) {
      const formData: UserFormInterface = this.userForm.value;
      this.onSubmitBudget.emit(formData);
      this.userForm.reset();
    }
  }

}
