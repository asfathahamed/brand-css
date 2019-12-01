

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBarComponent } from './alert-bar/alert-bar.component';
import { ButtonDirective } from './button/button.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertBarComponent, ButtonDirective],
  exports: [
    AlertBarComponent,
    ButtonDirective
  ]
})
export class BrandModule { }