import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeroesComponent } from './nav-heroes.component';

describe('NavHeroesComponent', () => {
  let component: NavHeroesComponent;
  let fixture: ComponentFixture<NavHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
