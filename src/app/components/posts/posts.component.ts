import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Observable} from "rxjs";
import {Post} from "../../models/post.model";

@Component({
  selector: 'rest-blog-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts$: Observable<Post[]> | undefined;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.posts$ = this.postsService.getPosts();
  }

}
