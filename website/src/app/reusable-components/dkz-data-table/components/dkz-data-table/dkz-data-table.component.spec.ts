import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkzDataTableComponent } from './dkz-data-table.component';

describe('DkzDataTableComponent', () => {
  let component: DkzDataTableComponent;
  let fixture: ComponentFixture<DkzDataTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DkzDataTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DkzDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
