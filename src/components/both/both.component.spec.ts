import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BothComponent } from './both.component';

describe('BothComponent', () => {
  let component: BothComponent;
  let fixture: ComponentFixture<BothComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BothComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BothComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
