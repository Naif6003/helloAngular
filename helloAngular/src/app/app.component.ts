import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from 'favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  post = {
    title: "Title",
    isSelected: true
  }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs){
    console.log(eventArgs);
  }
}
