import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterSoloComponent } from './register-solo.component';

describe('RegisterSoloComponent', () => {
  let component: RegisterSoloComponent;
  let fixture: ComponentFixture<RegisterSoloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterSoloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterSoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
