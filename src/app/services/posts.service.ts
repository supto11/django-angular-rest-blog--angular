import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Post} from "../models/post.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>('/api/posts');
  }

}
