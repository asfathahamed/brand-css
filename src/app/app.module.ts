import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { BrandModule } from '/~/feature/brand/brand.module';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, BrandModule ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
