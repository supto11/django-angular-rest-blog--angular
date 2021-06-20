import { Component, OnInit } from '@angular/core';
import {PostsService} from "../../../services/posts.service";

@Component({
  selector: 'rest-blog-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private postService: PostsService) { }

  ngOnInit(): void {
  }

  create() {
    const data = {
      title: 'supto',
      body: 'body'
    }
    this.postService.createPost(data).subscribe(console.log);
  }

}
