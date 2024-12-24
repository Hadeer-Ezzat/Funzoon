import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPoolsComponent } from './find-pools.component';

describe('FindPoolsComponent', () => {
  let component: FindPoolsComponent;
  let fixture: ComponentFixture<FindPoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPoolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
