import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulleventComponent } from './fullevent.component';

describe('FulleventComponent', () => {
  let component: FulleventComponent;
  let fixture: ComponentFixture<FulleventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulleventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FulleventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
