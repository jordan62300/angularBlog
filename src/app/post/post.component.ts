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


 

  constructor() {
  }
  
  getPostContent() {
    return this.postContent;
  }

  getPostTitle() {
    return this.postTitle;
  }

  getLove() {
    console.log(this.postLoveIts);
  }

  ngOnInit() {
  }

  addOneLove() {
    console.log('hello')
    this.postLoveIts = this.postLoveIts + 1;
  }

  removeOneLove() {
    this.postLoveIts = this.postLoveIts - 1;
  }


}


