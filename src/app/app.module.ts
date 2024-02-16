import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustdirectiveDirective } from './custdirective.directive';
import { MydirectDirective } from './mydirect.directive';
import { UsdToinrPipe } from './usd-toinr.pipe';
import { SiInterestPipe } from './si-interest.pipe';
import {UserAuthModule} from './user-auth/user-auth.module'

@NgModule({
  declarations: [
    AppComponent,
    CustdirectiveDirective,
    MydirectDirective,
    UsdToinrPipe,
    SiInterestPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
