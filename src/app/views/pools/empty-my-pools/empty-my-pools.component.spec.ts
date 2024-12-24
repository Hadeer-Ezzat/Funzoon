import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyMyPoolsComponent } from './empty-my-pools.component';

describe('EmptyMyPoolsComponent', () => {
  let component: EmptyMyPoolsComponent;
  let fixture: ComponentFixture<EmptyMyPoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptyMyPoolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyMyPoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
