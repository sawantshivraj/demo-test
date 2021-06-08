import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewwebComponent } from './newweb.component';

describe('NewwebComponent', () => {
  let component: NewwebComponent;
  let fixture: ComponentFixture<NewwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewwebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
