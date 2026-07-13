import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Checkbox } from './checkbox';

describe('Checkbox', () => {
  let component: Checkbox;
  let fixture: ComponentFixture<Checkbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Checkbox],
    }).compileComponents();

    fixture = TestBed.createComponent(Checkbox);
    component = fixture.componentInstance;
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should start with the checkbox unchecked', ()=> {
    let checkBoxElement: HTMLInputElement = fixture.nativeElement.querySelector('input[type="checkbox"]');
    expect(checkBoxElement.checked).toBe(false);
  });

  // it ('should deploy accordion of pages and languages when checking the box', ()=> {
  //   let checkBoxElement: HTMLInputElement = fixture.nativeElement.querySelector('input[type="checkbox"]');
  //   expect(checkBoxElement.checked).toBe(false);
  // });

});
