import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsGlanceComponent } from './about-us-glance.component';

describe('AboutUsGlanceComponent', () => {
  let component: AboutUsGlanceComponent;
  let fixture: ComponentFixture<AboutUsGlanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsGlanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
