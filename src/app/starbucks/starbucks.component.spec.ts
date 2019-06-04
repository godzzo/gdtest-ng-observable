import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarbucksComponent } from './starbucks.component';

describe('StarbucksComponent', () => {
  let component: StarbucksComponent;
  let fixture: ComponentFixture<StarbucksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarbucksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarbucksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
