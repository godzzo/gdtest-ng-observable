import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WudangComponent } from './wudang.component';

describe('WudangComponent', () => {
  let component: WudangComponent;
  let fixture: ComponentFixture<WudangComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WudangComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WudangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
