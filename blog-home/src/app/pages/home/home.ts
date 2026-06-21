import { Component, inject, OnInit } from '@angular/core';
import { BlogState } from 'shared-state';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
    state = inject(BlogState);


ngOnInit() {
}
selectBlog() {
  console.log('selectBlog');
  let id = 1
   ++id
  this.state.setBlog({
    id: id,
    title: 'Angular MFE'
  });

}
}
