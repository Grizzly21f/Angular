import { Component } from '@angular/core';
import {UserPostComponent} from "../user-post/user-post.component";
import {IPost} from "../../interfaces/post.interface";
import {ActivatedRoute, Router} from "@angular/router";
import {PostsService} from "../../services/posts.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [
    UserPostComponent,
    NgForOf
  ],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.css'
})
export class UserPostsComponent {
userPosts:IPost[]

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private  postsService:PostsService) {
    this.activatedRoute.parent?.params.subscribe(({id}) => {
      this.userPosts = this.router.getCurrentNavigation()?.extras.state as IPost[]
      this.postsService.byUserId(id).subscribe(value => this.userPosts = value)
    })
  }

}
