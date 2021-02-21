import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ListingSectionComponent } from './listing-section.component';

describe('ListingSectionComponent', () => {
  let component: ListingSectionComponent;
  let fixture: ComponentFixture<ListingSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListingSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListingSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should test the table ', () => {
    expect(component.dataSource[0]['firstname']).toBe('neha');
  });
  
});
