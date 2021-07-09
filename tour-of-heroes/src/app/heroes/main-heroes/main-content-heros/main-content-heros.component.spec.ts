import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainContentHerosComponent } from './main-content-heros.component';

describe('MainContentHerosComponent', () => {
  let component: MainContentHerosComponent;
  let fixture: ComponentFixture<MainContentHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainContentHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainContentHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
