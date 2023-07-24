import { CanDeactivateFn } from '@angular/router';
import { QuestionComponent } from 'src/app/user-page/exam/question/question.component';

export interface isDeactiavte {
  canLoad : () => boolean

}
export const questionDeactivateGuard: CanDeactivateFn<QuestionComponent> = (component : QuestionComponent  , currentRoute, currentState, nextState) => {
  console.log(component)
  return false;
};
