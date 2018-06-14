import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ReportConfigurationModule} from './report-configuration/report-configuration.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReportConfigurationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
