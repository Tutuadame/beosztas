/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BFieldComponent } from './b-field.component';

describe('BFieldComponent', () => {
  let component: BFieldComponent;
  let fixture: ComponentFixture<BFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
