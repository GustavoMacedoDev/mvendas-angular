import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaProdutoComponent } from './detalha-produto.component';

describe('DetalhaProdutoComponent', () => {
  let component: DetalhaProdutoComponent;
  let fixture: ComponentFixture<DetalhaProdutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhaProdutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhaProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
