/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddBarBComponent } from './add-bar-b.component';

describe('AddBarBComponent', () => {
  let component: AddBarBComponent;
  let fixture: ComponentFixture<AddBarBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBarBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBarBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
