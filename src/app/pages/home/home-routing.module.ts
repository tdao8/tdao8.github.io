import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {IntroComponent} from './components/intro/intro.component';
import {WorkComponent} from './components/work/work.component';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {ContactComponent} from './components/contact/contact.component';
import {BlogsComponent} from './components/blogs/blogs.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: '', component: IntroComponent},
      {path: 'about-me', component: AboutMeComponent},
      {path: 'works', component: WorkComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'blog', component: BlogsComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
