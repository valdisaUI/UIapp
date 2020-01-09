import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UIwidgetsModule } from './uiwidgets/uiwidgets.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UIwidgetsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
