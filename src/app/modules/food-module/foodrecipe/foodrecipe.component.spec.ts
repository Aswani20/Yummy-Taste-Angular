import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodrecipeComponent } from './foodrecipe.component';

describe('FoodrecipeComponent', () => {
  let component: FoodrecipeComponent;
  let fixture: ComponentFixture<FoodrecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodrecipeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodrecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
