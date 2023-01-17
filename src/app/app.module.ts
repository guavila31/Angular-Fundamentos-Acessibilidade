import { DisabledControlModule } from './shared/directives/keyboard-manager/disabled-control/disabled-control.module';
import { YesNoButtonGroupModule } from './shared/componentes/yes-no-button-group/yes-no-button-group.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    YesNoButtonGroupModule,
    ReactiveFormsModule,
    FormsModule,
    DisabledControlModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
