import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustdirectiveDirective } from './custdirective.directive';
import { MydirectDirective } from './mydirect.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustdirectiveDirective,
    MydirectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
