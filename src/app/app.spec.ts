import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { Header } from './components/header/header';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Seo');
  });
  
  it('should create the Header component', () => {
    const fixture = TestBed.createComponent(Header);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it ('should trigger animation classes when hovering the card', async () => {
    const fixture = TestBed.createComponent(Header);
    fixture.detectChanges();
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    const cardElement = compiled.querySelector('.group');
    const lightningContainer = compiled.querySelector('.top-6.left-8');
    expect(cardElement).toBeTruthy();
    expect(lightningContainer).toBeTruthy();

    cardElement?.dispatchEvent(new MouseEvent('mouseenter'));
    fixture.detectChanges();
    expect(lightningContainer?.classList.contains('group-hover:animate-float-hover')).toBe(true);
  });
  
});
