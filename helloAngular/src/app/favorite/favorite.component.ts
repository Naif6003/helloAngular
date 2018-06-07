import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


export interface FavoriteChangedEventArgs {
  newValue: boolean;
}

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
    @Input('is-favorite') isSelected: boolean;
    @Output() change = new EventEmitter();

    @Input() username: string;

    onClick() {
      this.isSelected = !this.isSelected;
      this.change.emit({newValue: this.isSelected});
    }

  constructor() { }

  ngOnInit() {
  }

}
