import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  const routerSpy = {navigate: jasmine.createSpy('navigate')};
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ 
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
      providers: [
        { provide: Router, useValue: routerSpy }
      ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should click cancel button navigate to listingSection', () => {
    component.onCancel();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/', 'listingSection']);
  });

  it('should click onsubmit button navigate to listingSection', () => {
    component.onSubmit({firstname: 'firstname', 
    lastname: 'lastname', dob: new Date(), gender:'M', password:'abcdefg',confirmpassword:'abcdefg'})
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/', 'listingSection']);
  });

  it('onInit variable set check', () => {
    component.ngOnInit();
    expect(component.detailsForm).toBeInstanceOf(FormGroup);
  });
});
