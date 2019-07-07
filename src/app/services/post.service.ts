import { Injectable } from '@angular/core';
import {Post} from '../models/posts.models'
import { Subject } from 'rxjs';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class PostService {

  posts: Post[] = [] ;
  postSubject = new Subject<Post[]>()

  constructor() { }

  emitPostsSubject() {
    this.postSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts')
    .on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPostsSubject();
    })
  }

  createNewPost(newPost: Post) {
    this.posts.push(newPost);
    this.savePosts();
    this.emitPostsSubject();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postEl) => {
        if(postEl === post) {
          return true;
        }
      }
    )
    this.posts.splice(postIndexToRemove,1);
    this.savePosts();
    this.emitPostsSubject();
  }

  
  getSinglePost(id: number) {
    return new Promise(
      (resolve,reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        )
      }
    )
  }

  loveIt(index: number) {
    this.posts[index].loveIts++;
    console.log(this.posts[index].title);
    console.log(`loveNumber: ${ this.posts[index].loveIts }`);
    this.savePosts();
    this.emitPostsSubject();
  }

  dontLoveIt(index: number) {
    this.posts[index].loveIts--;
    console.log(this.posts[index].title);
    console.log(`loveNumber: ${ this.posts[index].loveIts }`);
    this.savePosts()
    this.emitPostsSubject();

}

}
