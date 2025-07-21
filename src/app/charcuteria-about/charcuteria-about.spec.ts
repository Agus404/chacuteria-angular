import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharcuteriaAbout } from './charcuteria-about';

describe('CharcuteriaAbout', () => {
  let component: CharcuteriaAbout;
  let fixture: ComponentFixture<CharcuteriaAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharcuteriaAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharcuteriaAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
