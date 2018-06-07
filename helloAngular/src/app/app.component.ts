import { Component } from '@angular/core';
import { FavoriteclickdEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isSelected: true,
    username: "naif"
  }

  onFavoriteChange(eventArgs: FavoriteclickdEventArgs){
    console.log(eventArgs);
  }
}
