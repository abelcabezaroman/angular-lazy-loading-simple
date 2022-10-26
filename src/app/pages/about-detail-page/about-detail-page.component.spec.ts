import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutDetailPageComponent } from './about-detail-page.component';

describe('AboutDetailPageComponent', () => {
  let component: AboutDetailPageComponent;
  let fixture: ComponentFixture<AboutDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
