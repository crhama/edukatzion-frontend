import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkzDrawerDetailsComponent } from './dkz-drawer-details.component';

describe('DkzDrawerDetailsComponent', () => {
  let component: DkzDrawerDetailsComponent;
  let fixture: ComponentFixture<DkzDrawerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DkzDrawerDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DkzDrawerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
