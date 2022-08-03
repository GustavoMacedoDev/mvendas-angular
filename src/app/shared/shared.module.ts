import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CNPJPipe } from './pipes/cnpj.pipe';

@NgModule({
  declarations: [
    CNPJPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CNPJPipe
  ]
})
export class SharedModule { }
