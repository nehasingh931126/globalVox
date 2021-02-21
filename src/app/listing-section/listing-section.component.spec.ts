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

  it('should test the table ', (done) => {
    expect(component.dataSource[0]['firstname']).toBe('neha');
    fixture.detectChanges();
    // fixture.whenStable().then(() => {
    //   const tableRows = fixture.debugElement.query(By.css('tr')).nativeElement;
    //   expect(tableRows.length).toBe(4);
    //   // Header row
    //   let headerRow = tableRows[0];
    //   expect(headerRow.cells[0].innerHTML).toBe('firstname');
    //   expect(headerRow.cells[1].innerHTML).toBe('lastname');
    //   // Data rows
    //   let row1 = tableRows[1];
    //   expect(row1.cells[0].innerHTML).toBe('neha');
    //   expect(row1.cells[1].innerHTML).toBe('singh');
    //   done();
    // });
  });
  
});
