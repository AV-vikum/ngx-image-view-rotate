import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxImageZoomRotateComponent } from './ngx-image-zoom-rotate.component';

describe('NgxImageZoomRotateComponent', () => {
  let component: NgxImageZoomRotateComponent;
  let fixture: ComponentFixture<NgxImageZoomRotateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxImageZoomRotateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxImageZoomRotateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
