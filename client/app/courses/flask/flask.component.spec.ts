import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaskComponent } from './flask.component';

describe('FlaskComponent', () => {
  let component: FlaskComponent;
  let fixture: ComponentFixture<FlaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
