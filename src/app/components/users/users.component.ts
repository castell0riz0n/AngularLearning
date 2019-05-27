import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // Variables
  user: User;
  users: User[];
  availability = false;
  isLoading: boolean = false;

  constructor(
    private userSv: UserService
  ) { }

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    this.isLoading = true;
    setTimeout(() => {
      return this.userSv.getUserlist().subscribe(response => {
        this.isLoading = false;
        this.users = response;
      });
    }, 2000);

  }

  onDeleteUser(userId) {
    const userIndex = this.users.findIndex(i => i.id === userId);
    this.users.splice(userIndex, 1);
  }

  checkAvailablity() {

  }
}
