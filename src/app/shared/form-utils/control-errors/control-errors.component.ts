import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";
import {ControlErrorConfig} from "./model/control-error-config";

@Component({
  selector: 'app-control-errors',
  templateUrl: './control-errors.component.html',
  styleUrls: ['./control-errors.component.scss']
})
export class ControlErrorsComponent {

  @Input() control: AbstractControl;
  @Input() controlErrorConfig: ControlErrorConfig;

  constructor() { }


  get controlError(): string {

    if (this.control.touched && this.control.errors) {
      return Object.keys(this.control.errors)[0];
    }

    return null;
  }

}
