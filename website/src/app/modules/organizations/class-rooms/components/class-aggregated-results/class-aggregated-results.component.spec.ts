import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassAggregatedResultsComponent } from './class-aggregated-results.component';

describe('ClassAggregatedResultsComponent', () => {
  let component: ClassAggregatedResultsComponent;
  let fixture: ComponentFixture<ClassAggregatedResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassAggregatedResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassAggregatedResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
