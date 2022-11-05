import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmEmployeesComponent } from './cm-employees.component';

describe('CmEmployeesComponent', () => {
  let component: CmEmployeesComponent;
  let fixture: ComponentFixture<CmEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CmEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
