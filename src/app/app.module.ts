import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { PagesModule } from './pages/pages.module';
import { AppComponent } from './app.component';
import { ImageService } from './services/image.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



import { MaterialModule } from '@angular/material';
import { MasonryModule } from 'angular2-masonry';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    MasonryModule,
    RouterModule,
    AppRoutingModule,
    PagesModule,
    BrowserAnimationsModule,
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }




