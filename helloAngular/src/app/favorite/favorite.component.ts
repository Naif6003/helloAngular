import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';


export interface FavoriteclickdEventArgs {
  newValue: boolean;
}

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated,
})

export class FavoriteComponent{
    @Input('is-favorite') isSelected: boolean;
    @Output('change') click = new EventEmitter();

    @Input('inputValue') username: string;

    onClick() {
      this.isSelected = !this.isSelected;
      this.click.emit({newValue: this.isSelected});
    }

    onInput(){
      console.log(this.username);
    }
}
