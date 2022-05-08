import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RViewComponent } from './r-view.component';

describe('RViewComponent', () => {
  let component: RViewComponent;
  let fixture: ComponentFixture<RViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
