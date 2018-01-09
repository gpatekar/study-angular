import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import App components
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ArticleComponent } from './pages/article/article.component';
import { DiscussionComponent } from './pages/discussion/discussion.component';
import { SlidersComponent } from './pages/sliders/sliders.component';
import { AccountComponent } from './pages/account/account.component';
import { PlaygroundComponent } from './pages/playground/playground.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'about-us', component: AboutUsComponent},
  { path: 'article', component: ArticleComponent},
  { path: 'discussion', component: DiscussionComponent},
  { path: 'sliders', component: SlidersComponent},
  { path: 'Account', component: AccountComponent},
  { path: 'playground', component: PlaygroundComponent}
];

@NgModule({
  imports: [
     RouterModule.forRoot( appRoutes, { enableTracing: true } )
  ],
  exports:
  [
      RouterModule
  ]
})

export class AppRoutingModule { }
