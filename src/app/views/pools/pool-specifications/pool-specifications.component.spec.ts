import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolSpecificationsComponent } from './pool-specifications.component';

describe('PoolSpecificationsComponent', () => {
  let component: PoolSpecificationsComponent;
  let fixture: ComponentFixture<PoolSpecificationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolSpecificationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolSpecificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
