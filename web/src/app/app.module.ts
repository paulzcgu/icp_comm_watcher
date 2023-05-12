import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from 'src/app/app-routing.module';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/header/header.component';
import { InitialTestComponent } from 'src/app/initial-test/initial-test.component';
import { HdrSubscriberService } from 'src/app/_services/hdr-subscriber.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InitialTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HdrSubscriberService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
