import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  posts: Post[];
  isLoading: boolean = false;
  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.route.data.subscribe(data => {
        this.isLoading = false;
        this.posts = data['user'];
      });
    }, 3000);

    console.log(this.posts);
  }

}
