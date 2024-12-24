import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolPrivacyComponent } from './pool-privacy.component';

describe('PoolPrivacyComponent', () => {
  let component: PoolPrivacyComponent;
  let fixture: ComponentFixture<PoolPrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolPrivacyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolPrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
