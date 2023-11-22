import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [],
})
export class AppComponent {
  constructor(public authService: AuthService) {}
  title = 'VideoGames';
  onLogout() {
    this.authService.logout();
  }
}
