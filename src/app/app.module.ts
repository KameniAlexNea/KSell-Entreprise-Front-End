import { BrowserModule } from '@angular/platform-browser';

/* Routing */
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

/* Angular Material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

/* FormsModule */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/* Angular Flex Layout */
import { FlexLayoutModule } from "@angular/flex-layout";

/* Components */
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ControlErrorComponent } from './components/control-error/control-error.component';
import { ControlErrorsDirective } from './directives/control-errors.directive';
import { ControlErrorContainerDirective } from './directives/control-error-container.directive';
import { FormSubmitDirective } from './directives/form-submit.directive';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    RegisterComponent,
    LogInComponent,
    ControlErrorComponent,
    ControlErrorContainerDirective,
    FormSubmitDirective,
    ControlErrorsDirective,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [ControlErrorComponent, ]
})

export class AppModule { }