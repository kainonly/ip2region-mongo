import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleIndexComponent } from './role-index.component';

describe('RoleIndexComponent', () => {
  let component: RoleIndexComponent;
  let fixture: ComponentFixture<RoleIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
