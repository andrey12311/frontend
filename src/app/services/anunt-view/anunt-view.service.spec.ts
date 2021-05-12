import { TestBed } from '@angular/core/testing';

import { AnuntViewService } from './anunt-view.service';

describe('AnuntViewService', () => {
  let service: AnuntViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnuntViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
