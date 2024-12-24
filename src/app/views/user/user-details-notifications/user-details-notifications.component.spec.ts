import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsNotificationsComponent } from './user-details-notifications.component';

describe('UserDetailsNotificationsComponent', () => {
  let component: UserDetailsNotificationsComponent;
  let fixture: ComponentFixture<UserDetailsNotificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsNotificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
