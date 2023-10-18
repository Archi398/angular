import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategComponent } from './categ.component';

describe('QuestionComponent', () => {
  let component: CategComponent;
  let fixture: ComponentFixture<CategComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategComponent]
    });
    fixture = TestBed.createComponent(CategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
