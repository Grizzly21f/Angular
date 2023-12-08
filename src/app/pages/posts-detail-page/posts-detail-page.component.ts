import { Component } from '@angular/core';
import {UserPostDetailsComponent} from "../../components/user-post-details/user-post-details.component";

@Component({
  selector: 'app-posts-detail-page',
  standalone: true,
  imports: [
    UserPostDetailsComponent
  ],
  templateUrl: './posts-detail-page.component.html',
  styleUrl: './posts-detail-page.component.css'
})
export class PostsDetailPageComponent {

}
