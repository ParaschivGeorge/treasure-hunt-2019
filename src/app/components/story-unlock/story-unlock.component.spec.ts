import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryUnlockComponent } from './story-unlock.component';

describe('StoryUnlockComponent', () => {
  let component: StoryUnlockComponent;
  let fixture: ComponentFixture<StoryUnlockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryUnlockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryUnlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
