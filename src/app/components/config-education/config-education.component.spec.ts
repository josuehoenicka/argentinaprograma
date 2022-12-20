import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigEducationComponent } from './config-education.component';

describe('ConfigEducationComponent', () => {
  let component: ConfigEducationComponent;
  let fixture: ComponentFixture<ConfigEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigEducationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
