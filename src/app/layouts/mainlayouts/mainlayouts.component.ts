import { Component } from '@angular/core';

import {RouterOutlet} from "@angular/router";
import {UsersPageComponent} from "../../pages/users-page/users-page.component";

@Component({
  selector: 'app-mainlayouts',
  standalone: true,
  imports: [
   UsersPageComponent,
    RouterOutlet
  ],
  templateUrl: './mainlayouts.component.html',
  styleUrl: './mainlayouts.component.css'
})
export class MainlayoutsComponent {

}
