import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProperityTypeComponent } from './properity-type.component';

describe('ProperityTypeComponent', () => {
  let component: ProperityTypeComponent;
  let fixture: ComponentFixture<ProperityTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProperityTypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProperityTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
