import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './componenets/side-nav/side-nav.component';
import { HeaderComponent } from './componenets/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [SideNavComponent, HeaderComponent],
  exports: [
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class CoreModule { }
