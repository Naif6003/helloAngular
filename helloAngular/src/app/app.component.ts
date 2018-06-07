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

  tweet = {
    body: 'Here is the body of a tweet ...',
    isLiked: false,
    likesCount: 0
  }

  increment(){
    this.tweet.isLiked = !this.tweet.isLiked;
    if(this.tweet.isLiked){
        this.tweet.likesCount++;
    }else{
      this.tweet.likesCount--;
    }
  }
  onFavoriteChange(eventArgs: FavoriteclickdEventArgs){
    console.log(eventArgs);
  }
}
