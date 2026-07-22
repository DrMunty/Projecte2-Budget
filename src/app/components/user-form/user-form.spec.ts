import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserForm } from './user-form';

describe('UserForm Gherkin scenarios', () => {
  let component: UserForm;
  let fixture: ComponentFixture<UserForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserForm],
    }).compileComponents();

    fixture = TestBed.createComponent(UserForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('Scenario: Given an empty form, When the user submits it, Then no event is emitted and the form stays invalid', () => {
    let emittedValue: unknown;
    component.onSubmitBudget.subscribe(value => {
      emittedValue = value;
    });

    component.submitForm();

    expect(emittedValue).toBeUndefined();
    expect(component.userForm.invalid).toBe(true);
  });

  it('Scenario: Given valid form data, When the user submits it, Then the output emits the values and resets the form', () => {
    let emittedValue: unknown;
    component.onSubmitBudget.subscribe(value => {
      emittedValue = value;
    });

    component.userForm.patchValue({
      name: 'Albert',
      phone: '600000001',
      email: 'albert@example.com',
    });

    component.submitForm();

    expect(emittedValue).toEqual({
      name: 'Albert',
      phone: '600000001',
      email: 'albert@example.com',
    });
    expect(component.userForm.pristine).toBe(true);
    expect(component.userForm.get('name')?.value).toBeNull();
  });
});
