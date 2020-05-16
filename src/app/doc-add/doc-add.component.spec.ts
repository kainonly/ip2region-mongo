import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocAddComponent } from './doc-add.component';

describe('DocAddComponent', () => {
  let component: DocAddComponent;
  let fixture: ComponentFixture<DocAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
