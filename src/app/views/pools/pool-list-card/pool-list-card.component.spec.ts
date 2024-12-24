import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoolListCardComponent } from './pool-list-card.component';

describe('PoolListCardComponent', () => {
  let component: PoolListCardComponent;
  let fixture: ComponentFixture<PoolListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoolListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoolListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
