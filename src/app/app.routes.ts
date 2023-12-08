import { Routes } from '@angular/router';
import {MainlayoutsComponent} from "./layouts/mainlayouts/mainlayouts.component";
import {UsersPageComponent} from "./pages/users-page/users-page.component";
import {PostsPageComponent} from "./pages/posts-page/posts-page.component";
import {PostsDetailPageComponent} from "./pages/posts-detail-page/posts-detail-page.component";
import {UserDtPageComponent} from "./pages/user-dt-page/user-dt-page.component";

export const routes: Routes = [
  {
path:'',component:MainlayoutsComponent,children:[
      {path:'',redirectTo:'users',pathMatch:'full'},
      {path:'users',component:UsersPageComponent},
      {path:'users/:id',component:UserDtPageComponent,children:[
          {path:'posts',component:PostsPageComponent}
        ]},
      {path:'/posts/:postId/details',component:PostsDetailPageComponent}
    ]
  }
];

