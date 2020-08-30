import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemLineageV1Component } from './system-lineage-v1.component';

describe('SystemLineageV1Component', () => {
  let component: SystemLineageV1Component;
  let fixture: ComponentFixture<SystemLineageV1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemLineageV1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemLineageV1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
