import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoGamesComponent } from './videoGames/videoGames.component';
import { AddvideoGameComponent } from './add-videoGame/add-videoGame.component';
import { UpdatevideoGameComponent } from './update-videoGame/update-videoGame.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { videoGamesGuard } from './video-games.guard';

const routes: Routes = [
  { path: 'videoGames', component: VideoGamesComponent },
  {
    path: 'add-videoGame',
    component: AddvideoGameComponent,
    canActivate: [videoGamesGuard],
  },
  { path: 'updateVideoGame/:id', component: UpdatevideoGameComponent },
  { path: 'login', component: LoginComponent },
  { path: 'app-forbidden', component: ForbiddenComponent },

  { path: '', redirectTo: 'videoGames', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
