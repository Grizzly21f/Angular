import { Component } from '@angular/core';
import {UserDetailsComponent} from "../../components/user-details/user-details.component";
import {RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-user-dt-page',
  standalone: true,
  imports: [
    UserDetailsComponent,
    RouterOutlet
  ],
  templateUrl: './user-dt-page.component.html',
  styleUrl: './user-dt-page.component.css'
})
export class UserDtPageComponent {

}
