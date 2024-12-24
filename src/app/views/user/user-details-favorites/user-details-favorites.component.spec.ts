import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsFavoritesComponent } from './user-details-favorites.component';

describe('UserDetailsFavoritesComponent', () => {
  let component: UserDetailsFavoritesComponent;
  let fixture: ComponentFixture<UserDetailsFavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsFavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsFavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
