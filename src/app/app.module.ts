import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainComponent } from './main/main.component';
import {FooterComponent } from './footer/footer.component';
import { NavService} from './nav/nav.service';
import { ParagraphComponent } from './main/paragraph.component';



@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainComponent,
    FooterComponent,
    ParagraphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NavService],
  bootstrap: [AppComponent]
})
export class AppModule { }
