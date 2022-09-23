import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreatelogComponent } from './createlog/createlog.component';
import { DynamicUpdate } from './dynamicUpdate/dynamicupdate.component';
@NgModule({
  declarations: [
    AppComponent,
    CreatelogComponent,
    DynamicUpdate
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
