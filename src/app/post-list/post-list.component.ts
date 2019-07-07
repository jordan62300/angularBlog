import { Component,Input, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import {Post} from '../models/posts.models';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit , OnDestroy {

  posts: Post[];
  postsSubscription: Subscription;
  isDeleted = false;

  
  constructor(private postService: PostService,
              private router : Router) { }

  ngOnInit() {
    this.postsSubscription = this.postService.postSubject.subscribe(
      (posts: Post[]) => {
        this.posts = posts;
      }
    );
    this.postService.getPosts();
    this.postService.emitPostsSubject();
  }

  onNewPost() {
    this.router.navigate(['/posts' , 'new'])
  }

  onDeletePost(post: Post) {
    this.postService.removePost(post);
    const deleted = true
    this.isDeleted = deleted
  }

  onViewPost(id: number) {
    this.router.navigate(['/posts', 'view' , id]);
  }

  onLoveIt(index) {
    this.postService.loveIt(index);
  }

  onDontLoveIt(index) {
    this.postService.dontLoveIt(index);
  }

  ngOnDestroy() {
    this.postsSubscription.unsubscribe();
  }

}
