import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  username: string = "";
  availability = true;
  constructor(
    private userSv: UserService
  ) { }

  ngOnInit() {
  }

  checkAvailability(value: string) {
    if (value.length >= 3) {
      this.availability = this.userSv.availableUser(value);
    }
  }
}
