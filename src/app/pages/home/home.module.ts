import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import {ExtendedModule, FlexModule} from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { SupportComponent } from './pages/support/support.component';
import { CoreModule } from '../../core/core.module';
import { MatListModule } from '@angular/material/list';
import { LandingPageService } from './services/landing-page.service';
import { HttpClientModule } from '@angular/common/http';
import {MatSliderModule} from '@angular/material/slider';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import { IntroComponent } from './components/intro/intro.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { WorkComponent } from './components/work/work.component';
import { ContactComponent } from './components/contact/contact.component';
import { PersonalInfoComponent } from './components/personal-info/personal-info.component';


@NgModule({
  declarations: [HomeComponent, SupportComponent, IntroComponent, AboutMeComponent, WorkComponent, ContactComponent, PersonalInfoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatSidenavModule,
    MatIconModule,
    FlexModule,
    MatButtonModule,
    MatTooltipModule,
    MatToolbarModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    CoreModule,
    MatListModule,
    HttpClientModule,
    MatSliderModule,
    MatProgressBarModule,
    MatCardModule,
    ExtendedModule
  ],
  providers: [
    LandingPageService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeModule {
}
