import { Routes } from '@angular/router';
import {MainlayoutsComponent} from "./layouts/mainlayouts/mainlayouts.component";
import {UsersPageComponent} from "./pages/Userspage/users-page/users-page.component";
import {UsersDetailsComponent} from "./pages/UsersDetails/users-details/users-details.component";
import {PostPageComponent} from "./pages/PostPage/post-page/post-page.component";
import {PostDetailPageComponent} from "./pages/PostDetailPage/post-detail-page/post-detail-page.component";

export const routes: Routes = [
  {
path:'',component:MainlayoutsComponent,children:[
      {path:'',redirectTo:'users',pathMatch:'full'},
      {path:'users',component:UsersPageComponent},
      {path:'users/:id',component:UsersDetailsComponent,children:[
          {path:'posts',component:PostPageComponent}
        ]},
      {path:'posts/:postId/details',component:PostDetailPageComponent}
    ]
  }
];

