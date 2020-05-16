import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeIndexComponent } from './type-index.component';

describe('TypeIndexComponent', () => {
  let component: TypeIndexComponent;
  let fixture: ComponentFixture<TypeIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
