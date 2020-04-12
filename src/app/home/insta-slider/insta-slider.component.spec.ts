import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstaSliderComponent } from './insta-slider.component';

describe('InstaSliderComponent', () => {
  let component: InstaSliderComponent;
  let fixture: ComponentFixture<InstaSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstaSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstaSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
