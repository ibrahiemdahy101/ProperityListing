import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProperityComponent } from './properity.component';

describe('ProperityComponent', () => {
  let component: ProperityComponent;
  let fixture: ComponentFixture<ProperityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProperityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProperityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
