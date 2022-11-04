import {AbstractControl, AsyncValidatorFn} from "@angular/forms";
import {UsersService} from "../../service/users.service";
import {debounceTime, map, tap} from "rxjs";

export function usernameNotTakenValidator(userSevice: UsersService): AsyncValidatorFn {
  return (control: AbstractControl) => {
      return userSevice.checkIfUsernameIsTaken(control.value)
        .pipe(
          tap(c => console.log('szukam')),
          map(result => result ? {usernameAlreadyTaken: true} : null)
        )
  }
}
