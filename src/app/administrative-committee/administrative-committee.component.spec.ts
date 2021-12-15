import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrativeCommitteeComponent } from './administrative-committee.component';

describe('AdministrativeCommitteeComponent', () => {
  let component: AdministrativeCommitteeComponent;
  let fixture: ComponentFixture<AdministrativeCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrativeCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrativeCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
