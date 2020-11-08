import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingexapleComponent } from './databindingexaple.component';

describe('DatabindingexapleComponent', () => {
  let component: DatabindingexapleComponent;
  let fixture: ComponentFixture<DatabindingexapleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabindingexapleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingexapleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
