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
    fixture.componentRef.setInput('cardData', {
      title: 'Seo',
      description: 'Web responsive',
      price: 300,
    });
    fixture.componentRef.setInput('allowExtraOptions', true);
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should deploy additional options such as number of languages and pages when the checkbox is checked', () => {
    const checkBoxElement: HTMLInputElement = fixture.nativeElement.querySelector('input[type="checkbox"]');
    expect(checkBoxElement.checked).toBe(false);
    checkBoxElement.click();
    fixture.detectChanges();
    expect(checkBoxElement.checked).toBe(true);
    const cardText: string = fixture.nativeElement.textContent;
    expect(cardText).toContain('Número de pàgines');
    expect(cardText).toContain('Número de llenguatges');
  });

  it('should change the number of pages and languages when the user clicks the corresponding + and - buttons', () => {
    const checkBoxElement: HTMLInputElement = fixture.nativeElement.querySelector('input[type="checkbox"]');
    expect(checkBoxElement.checked).toBe(false);
    checkBoxElement.click();
    fixture.detectChanges();
    expect(checkBoxElement.checked).toBe(true);
    const cardText: string = fixture.nativeElement.textContent;
    expect(cardText).toContain('Número de pàgines');
    expect(cardText).toContain('Número de llenguatges');
    const pagesNumberPlus: HTMLInputElement = fixture.nativeElement.querySelector('[data-test-id="button-pages-plus"]');
    const pagesNumberMinus: HTMLInputElement = fixture.nativeElement.querySelector('[data-test-id="button-pages-minus"]');
    const quantity: HTMLInputElement = fixture.nativeElement.querySelector('[data-test-id="pages-quantity"]');
    expect(quantity.textContent.trim()).toBe('1');
    pagesNumberPlus.click();
    fixture.detectChanges();
    expect(quantity.textContent.trim()).toBe('2');
    pagesNumberMinus.click();
    fixture.detectChanges();
    expect(quantity.textContent.trim()).toBe('1');
  });
});
