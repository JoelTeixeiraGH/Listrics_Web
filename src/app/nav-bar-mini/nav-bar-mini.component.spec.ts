import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarMiniComponent } from './nav-bar-mini.component';

describe('NavBarMiniComponent', () => {
  let component: NavBarMiniComponent;
  let fixture: ComponentFixture<NavBarMiniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarMiniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarMiniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
