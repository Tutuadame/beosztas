import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsszisztensekComponent } from './asszisztensek.component';

describe('AsszisztensekComponent', () => {
  let component: AsszisztensekComponent;
  let fixture: ComponentFixture<AsszisztensekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsszisztensekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsszisztensekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
