import { TestBed } from '@angular/core/testing';

import { StoryUnlockRrService } from './story-unlock-rr.service';

describe('StoryUnlockRrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoryUnlockRrService = TestBed.get(StoryUnlockRrService);
    expect(service).toBeTruthy();
  });
});
