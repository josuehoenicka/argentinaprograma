import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigExperiencesComponent } from './config-experiences.component';

describe('ConfigExperiencesComponent', () => {
  let component: ConfigExperiencesComponent;
  let fixture: ComponentFixture<ConfigExperiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigExperiencesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigExperiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
