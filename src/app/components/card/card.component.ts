import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/models/user';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  @Input() user: User;
  @Output() deleteUserReq = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {

  }
  deleteUser(userId) {
    this.deleteUserReq.emit(userId);
  }

}
