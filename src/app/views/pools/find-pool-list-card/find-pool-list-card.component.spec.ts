import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPoolListCardComponent } from './find-pool-list-card.component';

describe('FindPoolListCardComponent', () => {
  let component: FindPoolListCardComponent;
  let fixture: ComponentFixture<FindPoolListCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPoolListCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPoolListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
