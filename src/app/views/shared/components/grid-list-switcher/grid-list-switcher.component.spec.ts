import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridListSwitcherComponent } from './grid-list-switcher.component';

describe('GridListSwitcherComponent', () => {
  let component: GridListSwitcherComponent;
  let fixture: ComponentFixture<GridListSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridListSwitcherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridListSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
