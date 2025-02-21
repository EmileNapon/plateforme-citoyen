import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { gardsGuard } from './gards.guard';

describe('gardsGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => gardsGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
