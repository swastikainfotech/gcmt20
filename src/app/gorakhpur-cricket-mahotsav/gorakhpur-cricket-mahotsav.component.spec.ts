import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GorakhpurCricketMahotsavComponent } from './gorakhpur-cricket-mahotsav.component';

describe('GorakhpurCricketMahotsavComponent', () => {
  let component: GorakhpurCricketMahotsavComponent;
  let fixture: ComponentFixture<GorakhpurCricketMahotsavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GorakhpurCricketMahotsavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GorakhpurCricketMahotsavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
