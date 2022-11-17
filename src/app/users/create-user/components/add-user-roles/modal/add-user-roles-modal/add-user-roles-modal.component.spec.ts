import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUserRolesModalComponent } from './add-user-roles-modal.component';

describe('AddUserRolesModalComponent', () => {
  let component: AddUserRolesModalComponent;
  let fixture: ComponentFixture<AddUserRolesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUserRolesModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUserRolesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
