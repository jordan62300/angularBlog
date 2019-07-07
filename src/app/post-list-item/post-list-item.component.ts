import { Component,Input, OnInit } from '@angular/core';
import { Post } from '../models/posts.models';
import { PostService } from '../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  post: Post;
  isDeleted = false;
  index: number = this.route.snapshot.params['id'];
  

 

  constructor(private postService: PostService,
              private route: ActivatedRoute,
              private router: Router) {
  }
 

  ngOnInit() {
    this.post = new Post('', '','',0);
    const id = this.route.snapshot.params['id'];
    this.postService.getSinglePost(+id).then(
      (post:Post) => {
        this.post = post
        

  }
    )
 
}

  onBack() {
    this.router.navigate(['/posts'])
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
    this.router.navigate(['/posts'])
    const deleted = true
    this.isDeleted = deleted
  }

  

}