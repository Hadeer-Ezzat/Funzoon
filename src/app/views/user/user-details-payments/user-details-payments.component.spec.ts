import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsPaymentsComponent } from './user-details-payments.component';

describe('UserDetailsPaymentsComponent', () => {
  let component: UserDetailsPaymentsComponent;
  let fixture: ComponentFixture<UserDetailsPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
