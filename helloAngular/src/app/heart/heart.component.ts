import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'heart',
  templateUrl: './heart.component.html',
  styleUrls: ['./heart.component.css']
})
export class HeartComponent {

  @Input('heart') isSelected: boolean;
  @Input('count') count: number;
  @Output('countNumber') countNumber = new EventEmitter();

  clickHeart(){
    this.countNumber.emit();
  }

}
