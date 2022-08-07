import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalhaPedidoComponent } from './detalha-pedido.component';

describe('DetalhaPedidoComponent', () => {
  let component: DetalhaPedidoComponent;
  let fixture: ComponentFixture<DetalhaPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhaPedidoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalhaPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
