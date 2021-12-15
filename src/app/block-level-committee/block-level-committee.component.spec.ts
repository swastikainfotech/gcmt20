import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockLevelCommitteeComponent } from './block-level-committee.component';

describe('BlockLevelCommitteeComponent', () => {
  let component: BlockLevelCommitteeComponent;
  let fixture: ComponentFixture<BlockLevelCommitteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlockLevelCommitteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockLevelCommitteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
