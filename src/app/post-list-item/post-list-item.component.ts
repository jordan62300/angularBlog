import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() postContent:string;
 @Input() postTitle:string;
 postLoveIts:number = 0;
 postCreatedAt = new Date();
  

 

  constructor() {
  }
  
  getPostContent() {
    return this.postContent;
  }

  getPostTitle() {
    return this.postTitle;
  }

  

  ngOnInit() {
  }

  addOneLove() {
    this.postLoveIts = this.postLoveIts + 1;
    console.log(this.postLoveIts)
  }

  removeOneLove() {
    this.postLoveIts = this.postLoveIts - 1;
    console.log(this.postLoveIts)
  }
}