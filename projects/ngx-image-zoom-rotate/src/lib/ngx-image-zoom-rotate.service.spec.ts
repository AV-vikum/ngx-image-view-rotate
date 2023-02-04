import { TestBed } from '@angular/core/testing';

import { NgxImageZoomRotateService } from './ngx-image-zoom-rotate.service';

describe('NgxImageZoomRotateService', () => {
  let service: NgxImageZoomRotateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxImageZoomRotateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
