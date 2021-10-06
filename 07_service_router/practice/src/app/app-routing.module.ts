import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TimelinesComponent} from './angular-timelines-app/timelines/timelines.component';
import {YoutubePlaylistComponent} from './angular-product-management/youtube-playlist/youtube-playlist.component';
import {YoutubePlayerComponent} from './angular-product-management/youtube-player/youtube-player.component';



const routes: Routes = [
  {
    path: 'timelines',
    component: TimelinesComponent

  },
  { path: 'youtube',
    component: YoutubePlaylistComponent
  },
  {
    path: 'youtube',
    component: YoutubePlaylistComponent,
    children: [{
      path: ':id',
      component: YoutubePlayerComponent
    }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
