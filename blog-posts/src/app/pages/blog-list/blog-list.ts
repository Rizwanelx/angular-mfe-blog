import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogState } from 'shared-state';

@Component({
  selector: 'app-blog-list',
  imports: [],
  templateUrl: './blog-list.html',
  styleUrl: './blog-list.scss',
})

export class BlogList implements OnInit {
 blogs = BLOGS;
 route = inject(Router);
 state = inject(BlogState);


ngOnInit() {
  this.state.selectedBlog$
    .subscribe(blog => {
      console.log(blog);

    });
  }
 onNavigateToBlogDetail(blogId: number) {
  this.route.navigate(['/posts', blogId]);
 }

}


export const BLOGS = [
  {
    id: 1,
    title: 'Angular Signals'
  },
  {
    id: 2,
    title: 'Micro Frontend'
  }
];