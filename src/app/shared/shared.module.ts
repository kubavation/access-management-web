import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatTableModule} from "@angular/material/table";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatNativeDateModule, MatOptionModule} from "@angular/material/core";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatChipsModule} from "@angular/material/chips";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatCardModule} from "@angular/material/card";
import {MatStepperModule} from "@angular/material/stepper";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import { ControlErrorsComponent } from './form-utils/control-errors/control-errors.component';


@NgModule({
  declarations: [
    ControlErrorsComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  exports: [
    MatSidenavModule,
    MatListModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    MatSnackBarModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatCardModule,
    MatStepperModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
