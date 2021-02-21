import { async, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  // let routerStub;
  beforeEach(async(() => {
    // routerStub = {
    //   navigate: jasmine.createSpy('navigate');
    // };
    // const store = {};
    // spyOn(localStorage, 'listData').andCallFake((key) => {
    //   return store[key];
    // });

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        AppComponent,
      ],
      // providers: [
      //   { provide: Router, useValue: routerStub },
      // ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Assignment'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Assignment');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.title').textContent).toContain('Assignment');
  });

  it('Navigation /projectKarona', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.form').textContent).toContain('Form');
    const href = fixture.debugElement.query(By.css('.form')).nativeElement.getAttribute('href');
    expect(href).toEqual('/projectKarona');
  });

  it('Navigation /listingSection', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    const href = fixture.debugElement.query(By.css('.listSection')).nativeElement.getAttribute('href');
    expect(compiled.querySelector('.listSection').textContent).toContain('Listing Section');
    expect(href).toEqual('/listingSection');
  });

  it(`'defaultFormList' is Array`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.defaultFormList).toBeInstanceOf(Array);
  });
});
