import { Component } from '@angular/core';
import {UserPostsComponent} from "../../components/user-posts/user-posts.component";

@Component({
  selector: 'app-posts-page',
  standalone: true,
  imports: [
    UserPostsComponent
  ],
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent {

}
