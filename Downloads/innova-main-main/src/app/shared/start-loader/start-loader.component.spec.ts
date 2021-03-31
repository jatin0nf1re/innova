import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StartLoaderComponent } from './start-loader.component';

describe('StartLoaderComponent', () => {
  let component: StartLoaderComponent;
  let fixture: ComponentFixture<StartLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StartLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StartLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
