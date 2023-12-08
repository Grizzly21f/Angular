import { Injectable } from '@angular/core';
import {IPost} from "../interfaces/post.interface";
import {Observable} from "rxjs";
import {urls} from "../constants";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  byUserId(id:number): Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.posts.byUserId(id))
  }
  byId(id: number): Observable<IPost> {
    return this.httpClient.get<IPost>(urls.posts.byId(id))
  }
}
