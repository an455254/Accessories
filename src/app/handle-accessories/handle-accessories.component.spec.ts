import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandleAccessoriesComponent } from './handle-accessories.component';

describe('HandleAccessoriesComponent', () => {
  let component: HandleAccessoriesComponent;
  let fixture: ComponentFixture<HandleAccessoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandleAccessoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandleAccessoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
