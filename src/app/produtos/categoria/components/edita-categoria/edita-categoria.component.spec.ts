import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditaCategoriaComponent } from './edita-categoria.component';

describe('EditaCategoriaComponent', () => {
  let component: EditaCategoriaComponent;
  let fixture: ComponentFixture<EditaCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditaCategoriaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditaCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
