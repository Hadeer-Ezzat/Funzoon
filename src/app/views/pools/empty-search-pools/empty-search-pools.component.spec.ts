import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptySearchPoolsComponent } from './empty-search-pools.component';

describe('EmptySearchPoolsComponent', () => {
  let component: EmptySearchPoolsComponent;
  let fixture: ComponentFixture<EmptySearchPoolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptySearchPoolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptySearchPoolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
