import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeosztasokComponent } from './beosztasok.component';

describe('BeosztasokComponent', () => {
  let component: BeosztasokComponent;
  let fixture: ComponentFixture<BeosztasokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeosztasokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeosztasokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
