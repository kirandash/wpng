import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsService } from '../posts.service';

import { Router } from '@angular/router';

@Component({
  selector: 'wp-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: Post[];
  constructor( private postsService: PostsService, private router: Router  ) { }

  ngOnInit() {
  	this.getPosts();
  }

  getPosts() {
	this.postsService
	.getPosts()
	.subscribe(res => {
		this.posts = res;
	}); 	
  }

  selectPost(slug) {
	this.router.navigate([slug]);
  }

}
