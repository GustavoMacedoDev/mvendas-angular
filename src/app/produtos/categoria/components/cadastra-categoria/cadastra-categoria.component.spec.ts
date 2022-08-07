import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraCategoriaComponent } from './cadastra-categoria.component';

describe('CadastraCategoriaComponent', () => {
  let component: CadastraCategoriaComponent;
  let fixture: ComponentFixture<CadastraCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
