import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigLangsComponent } from './config-langs.component';

describe('ConfigLangsComponent', () => {
  let component: ConfigLangsComponent;
  let fixture: ComponentFixture<ConfigLangsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigLangsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigLangsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
