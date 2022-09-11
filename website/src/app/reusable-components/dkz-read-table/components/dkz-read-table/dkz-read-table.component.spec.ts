import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkzReadTableComponent } from './dkz-read-table.component';

describe('DkzReadTableComponent', () => {
  let component: DkzReadTableComponent;
  let fixture: ComponentFixture<DkzReadTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DkzReadTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DkzReadTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
