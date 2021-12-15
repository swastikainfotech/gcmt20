import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UmpireScorerComponent } from './umpire-scorer.component';

describe('UmpireScorerComponent', () => {
  let component: UmpireScorerComponent;
  let fixture: ComponentFixture<UmpireScorerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UmpireScorerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UmpireScorerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
