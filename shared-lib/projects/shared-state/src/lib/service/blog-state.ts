import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogState {


  private blogSubject =
    new BehaviorSubject<any>(null);

  selectedBlog$ =
    this.blogSubject.asObservable();

      id = Math.random();

  constructor() {
    console.log('BlogState =>', this.id);
  }
  setBlog(blog: any) {
    this.blogSubject.next(blog);
  }
}