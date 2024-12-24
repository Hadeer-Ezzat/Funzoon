import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploaderWithTableControlComponent } from './file-uploader-with-table-control.component';

describe('FileUploaderWithTableControlComponent', () => {
  let component: FileUploaderWithTableControlComponent;
  let fixture: ComponentFixture<FileUploaderWithTableControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileUploaderWithTableControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploaderWithTableControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
