import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolsLayoutComponent } from './pools-layout.component';

describe('PoolsLayoutComponent', () => {
  let component: PoolsLayoutComponent;
  let fixture: ComponentFixture<PoolsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolsLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
