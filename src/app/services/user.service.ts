import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces';
import { Observable } from 'rxjs';
import { urls } from '../constants/urls';
import {IPost} from "../interfaces/post.interface";



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<IUser[]> {
    return this.httpClient.get<IUser[]>(urls.users.users);
  }

  getPosts(id:number):Observable<IPost[]>{
    return this.httpClient.get<IPost[]>(urls.users.userPosts(id))
  }

}
