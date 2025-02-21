import { CanActivateFn } from '@angular/router';

export const gardsGuard: CanActivateFn = (route, state) => {
  return true;
};
