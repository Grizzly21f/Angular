import {Component, Input} from '@angular/core';
import {IPost} from "../../interfaces/post.interface";
import {UserPostComponent} from "../user-post/user-post.component";
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
 @Input() userPosts: IPost[]
}
