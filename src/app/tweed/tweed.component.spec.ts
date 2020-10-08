import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TweedComponent } from './tweed.component';

describe('TweedComponent', () => {
  let component: TweedComponent;
  let fixture: ComponentFixture<TweedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TweedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TweedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
