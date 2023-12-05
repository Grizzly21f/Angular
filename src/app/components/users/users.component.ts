

import { Component, OnInit } from '@angular/core';
import { UserService } from './../../services/user.service';
import {IUser} from "../../interfaces";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import {UserComponent} from "../user/user.component";
import {UserPostsComponent} from "../user-posts/user-posts.component";
import {IPost} from "../../interfaces/post.interface";


@Component({
  selector: 'app-users',
  standalone:true,
  imports: [
    FormsModule,
    NgForOf,
    UserComponent,
    UserPostsComponent
  ],
  styleUrls: ['./users.component.css'],
  templateUrl: './users.component.html',
})
export class UsersComponent implements OnInit {
    users: IUser[]
    userPosts:IPost[]

  constructor(private userService: UserService) {}

  ngOnInit(): void {
      this.userService.getAll().subscribe(value => this.users =value)
  }

  getUsersPost(id:number) {
    this.userService.getPosts(id).subscribe(value => this.userPosts = value)
  }
}
