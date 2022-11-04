import {AbstractControl, AsyncValidatorFn} from "@angular/forms";
import {UsersService} from "../../service/users.service";
import {map} from "rxjs";

export function usernameNotTakenValidator(userSevice: UsersService): AsyncValidatorFn {
  return (control: AbstractControl) => {
      return userSevice.checkIfUsernameIsTaken(control.value)
        .pipe(
          map(result => result ? {usernameAlreadyTaken: true} : null)
        )
  }
}
