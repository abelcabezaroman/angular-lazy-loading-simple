import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPageFormComponent } from './contact-page-form.component';

describe('ContactPageFormComponent', () => {
  let component: ContactPageFormComponent;
  let fixture: ComponentFixture<ContactPageFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPageFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
