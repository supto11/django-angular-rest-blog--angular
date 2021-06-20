import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../../../models/post.model";

@Component({
  selector: 'rest-blog-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input('data') data : Post | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
