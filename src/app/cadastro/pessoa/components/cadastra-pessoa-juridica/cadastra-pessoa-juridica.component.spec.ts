import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraPessoaJuridicaComponent } from './cadastra-pessoa-juridica.component';

describe('CadastraPessoaJuridicaComponent', () => {
  let component: CadastraPessoaJuridicaComponent;
  let fixture: ComponentFixture<CadastraPessoaJuridicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraPessoaJuridicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastraPessoaJuridicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
