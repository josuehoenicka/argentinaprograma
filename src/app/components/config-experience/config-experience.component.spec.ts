import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigExperienceComponent } from './config-experience.component';

describe('ConfigExperienceComponent', () => {
  let component: ConfigExperienceComponent;
  let fixture: ComponentFixture<ConfigExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigExperienceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
