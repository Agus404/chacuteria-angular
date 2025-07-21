import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharcuteriaProducts } from './charcuteria-products';

describe('CharcuteriaProducts', () => {
  let component: CharcuteriaProducts;
  let fixture: ComponentFixture<CharcuteriaProducts>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CharcuteriaProducts]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharcuteriaProducts);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
