import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card } from './card';

describe('Card', () => {
  let component: Card;
  let fixture: ComponentFixture<Card>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Card],
    }).compileComponents();

    fixture = TestBed.createComponent(Card);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ('should deploy additional options such as number of languages and pages when the checkbox is checked', () => {
    let checkBoxElement: HTMLInputElement = fixture.nativeElement.querySelector('input[type="checkbox"]');
     expect(checkBoxElement.checked).toBe(false);
     checkBoxElement.click();
     fixture.detectChanges();
     expect(checkBoxElement.checked).toBe(true);
     const cardText: string = fixture.nativeElement.textContent;
     expect(cardText).toContain('Nombre de pàgines');
     expect(cardText).toContain('Nombre de llenguatges');
  });

  it ('should change the number of pages and languages when the user clicks the corresponding + and - buttons', () => {
    let checkBoxElement: HTMLInputElement = fixture.nativeElement.querySelector('input[type="checkbox"]');
     expect(checkBoxElement.checked).toBe(false);
     checkBoxElement.click();
     fixture.detectChanges();
     expect(checkBoxElement.checked).toBe(true);
     const cardText: string = fixture.nativeElement.textContent;
     expect(cardText).toContain('Nombre de pàgines');
     expect(cardText).toContain('Nombre de llenguatges');
     let pagesNumberPlus: HTMLInputElement = fixture.nativeElement.querySelector('[data-test-id="button-pages-plus"]');
     let pagesNumberMinus: HTMLInputElement = fixture.nativeElement.querySelector('[data-test-id="button-pages-minus"]');
     let quantity: HTMLInputElement = fixture.nativeElement.querySelector('[data-test-id="pages-quantity"]');
     expect(quantity.textContent.trim()).toBe('0')
     pagesNumberPlus.click();
     fixture.detectChanges();
     expect(quantity.textContent.trim()).toBe('1');
     pagesNumberMinus.click();
     fixture.detectChanges();
     expect(quantity.textContent.trim()).toBe('0');
  });
  
});
