import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { LibraryComponent } from './library/library.component';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import { MatListModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material'
import { MatCardModule } from '@angular/material'
import { MatInputModule } from '@angular/material'
import { MatIconModule } from '@angular/material'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent
  ],
  imports: [
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
     ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
