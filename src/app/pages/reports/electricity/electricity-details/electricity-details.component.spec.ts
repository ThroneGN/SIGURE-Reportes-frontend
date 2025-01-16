import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityDetailsComponent } from './electricity-details.component';

describe('ElectricityDetailsComponent', () => {
  let component: ElectricityDetailsComponent;
  let fixture: ComponentFixture<ElectricityDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricityDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricityDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
