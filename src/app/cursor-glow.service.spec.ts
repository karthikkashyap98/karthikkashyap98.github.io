/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CursorGlowService } from './cursor-glow.service';

describe('Service: CursorGlow', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CursorGlowService]
    });
  });

  it('should ...', inject([CursorGlowService], (service: CursorGlowService) => {
    expect(service).toBeTruthy();
  }));
});
