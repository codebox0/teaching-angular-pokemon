import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginComponentComponent } from './begin-component.component';

describe('BeginComponentComponent', () => {
  let component: BeginComponentComponent;
  let fixture: ComponentFixture<BeginComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeginComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
