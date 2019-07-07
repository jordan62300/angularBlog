import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Post } from '../models/posts.models';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  PostForm: FormGroup

  constructor(private formBuilder: FormBuilder,
              private postService: PostService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.PostForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
     
    })
  }

  onSavePost() {
    const title = this.PostForm.get('title').value;
    const content = this.PostForm.get('content').value;
    const date = Date.now().toString();
    const loveIt = 0;
    const newPost = new Post(title,content,date,loveIt);
    this.postService.createNewPost(newPost);
    this.router.navigate(['/posts'])
  }

}
