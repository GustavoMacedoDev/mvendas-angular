import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPessoaJuridicaComponent } from './lista-pessoa-juridica.component';

describe('ListaPessoaJuridicaComponent', () => {
  let component: ListaPessoaJuridicaComponent;
  let fixture: ComponentFixture<ListaPessoaJuridicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaPessoaJuridicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaPessoaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
