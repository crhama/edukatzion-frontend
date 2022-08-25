import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DkzDataListComponent } from './dkz-data-list.component';

describe('DkzDataListComponent', () => {
  let component: DkzDataListComponent;
  let fixture: ComponentFixture<DkzDataListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DkzDataListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DkzDataListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
