import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPoolComponent } from './find-pool.component';

describe('FindPoolComponent', () => {
  let component: FindPoolComponent;
  let fixture: ComponentFixture<FindPoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPoolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
