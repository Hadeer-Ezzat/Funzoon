import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindPoolMoreDetailsComponent } from './find-pool-more-details.component';

describe('FindPoolMoreDetailsComponent', () => {
  let component: FindPoolMoreDetailsComponent;
  let fixture: ComponentFixture<FindPoolMoreDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindPoolMoreDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindPoolMoreDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
