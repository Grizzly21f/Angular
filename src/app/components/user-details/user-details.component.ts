import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IUser} from "../../interfaces";
import {UserService} from "../../services/user.service";
import {IPost} from "../../interfaces/post.interface";
import {PostsService} from "../../services/posts.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent implements OnInit{
user: IUser;
userPosts:IPost[];
  constructor(private router:Router,private activatedRoute:ActivatedRoute,private userService:UserService,private postsService:PostsService) {
    this.activatedRoute.params.subscribe(({id})=>{
      this.user = this.router.getCurrentNavigation()?.extras.state as IUser;


      if ((!this.user)) {
        this.userService.getById(id).subscribe(value => this.user=value)
      }

    })
  }

  getPosts(){
    this.router.navigate(['users',this.user.id, 'posts'])
  }

  ngOnInit() {


  }

}
