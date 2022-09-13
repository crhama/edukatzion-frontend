import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkzReadOnlyTableComponent } from './dkz-read-only-table.component';

describe('DkzReadOnlyTableComponent', () => {
  let component: DkzReadOnlyTableComponent;
  let fixture: ComponentFixture<DkzReadOnlyTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DkzReadOnlyTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DkzReadOnlyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
