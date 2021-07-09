import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentNavHeroesComponent } from './content-nav-heroes.component';

describe('ContentNavHeroesComponent', () => {
  let component: ContentNavHeroesComponent;
  let fixture: ComponentFixture<ContentNavHeroesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentNavHeroesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentNavHeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
