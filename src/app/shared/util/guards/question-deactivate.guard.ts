import { CanDeactivateFn } from '@angular/router';
export interface isDeactiavate {
  canDeactivate: () => boolean;
}
export const questionDeactivateGuard: CanDeactivateFn<isDeactiavate> = (component: isDeactiavate, currentRoute, currentState, nextState) => {
  return component.canDeactivate ? component.canDeactivate() : true;
};
