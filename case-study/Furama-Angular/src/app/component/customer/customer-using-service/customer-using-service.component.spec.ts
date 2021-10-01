import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUsingServiceComponent } from './customer-using-service.component';

describe('CustomerUsingServiceComponent', () => {
  let component: CustomerUsingServiceComponent;
  let fixture: ComponentFixture<CustomerUsingServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerUsingServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerUsingServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
