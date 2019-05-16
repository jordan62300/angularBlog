import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

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


