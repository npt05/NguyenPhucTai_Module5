import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUseServiceComponent } from './customer-use-service.component';

describe('CustomerUseServiceComponent', () => {
  let component: CustomerUseServiceComponent;
  let fixture: ComponentFixture<CustomerUseServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerUseServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerUseServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
