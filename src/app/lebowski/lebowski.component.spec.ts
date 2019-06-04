import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LebowskiComponent } from './lebowski.component';

describe('LebowskiComponent', () => {
  let component: LebowskiComponent;
  let fixture: ComponentFixture<LebowskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LebowskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LebowskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
