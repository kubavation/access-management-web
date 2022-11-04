import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdditionalUserInformationComponent } from './additional-user-information.component';

describe('AdditionalUserInformationComponent', () => {
  let component: AdditionalUserInformationComponent;
  let fixture: ComponentFixture<AdditionalUserInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdditionalUserInformationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdditionalUserInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
