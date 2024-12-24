import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsNavigationComponent } from './user-details-navigation.component';

describe('UserDetailsNavigationComponent', () => {
  let component: UserDetailsNavigationComponent;
  let fixture: ComponentFixture<UserDetailsNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
