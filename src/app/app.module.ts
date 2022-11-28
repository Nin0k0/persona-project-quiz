import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LayoutModule } from './layout/layout.module';
import { HttpClientModule } from '@angular/common/http';
import { InvalidSnackbarComponent } from './shared/components/invalid-snackbar/invalid-snackbar.component';

@NgModule({
  declarations: [AppComponent, InvalidSnackbarComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    HttpClientModule,
  ],
})
export class AppModule {}
