import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import {FormsModule} from '@angular/forms';
import { RatingBarComponentComponent } from './rating-bar-component/rating-bar-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CountdownTimerComponent,
    RatingBarComponentComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
