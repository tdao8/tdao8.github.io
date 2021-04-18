import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './core/componenets/page-not-found/page-not-found.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
import { MatButtonModule } from '@angular/material/button';
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatIconModule,
    CdkScrollableModule,
    MatButtonModule,
    NgxSkeletonLoaderModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
