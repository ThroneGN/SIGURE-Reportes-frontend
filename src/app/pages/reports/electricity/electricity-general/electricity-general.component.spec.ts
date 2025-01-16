import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityGeneralComponent } from './electricity-general.component';

describe('ElectricityGeneralComponent', () => {
  let component: ElectricityGeneralComponent;
  let fixture: ComponentFixture<ElectricityGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectricityGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElectricityGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
