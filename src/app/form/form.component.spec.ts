import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { RouterTestingModule } from '@angular/router/testing';
describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ 
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule
      ],
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

  it('should click cancel button', () => {
    const router = {
      navigate: jasmine.createSpy('navigate')
    }
    component.onCancel();
    expect(router.navigate).toHaveBeenCalledWith(['/listingSection']);
  });
});
