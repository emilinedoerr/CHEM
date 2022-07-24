import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiochemComponent } from './biochem.component';

describe('BiochemComponent', () => {
  let component: BiochemComponent;
  let fixture: ComponentFixture<BiochemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiochemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiochemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
