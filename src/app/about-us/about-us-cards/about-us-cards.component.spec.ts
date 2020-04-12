import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCardsComponent } from './about-us-cards.component';

describe('AboutUsCardsComponent', () => {
  let component: AboutUsCardsComponent;
  let fixture: ComponentFixture<AboutUsCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
