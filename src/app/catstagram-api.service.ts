import { cats } from './../registered-cats';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatstagramApiService {
  images = [];
  likes = [];

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Cats[]>{
    return this.http.get<Cats[]>("http://5e00dea0685ac80014514fa8.mockapi.io/api/cats/posts");
  }
  getPostComments(postId: number):Observable<PostComments[]>{
    return this.http.get<PostComments[]>(`http://5df115fd9df6fb00142bd818.mockapi.io/api/posts/${postId}/postComments`);
  }
  postComment(postId: number, comment: PostComments){
    return this.http.post(`http://5df115fd9df6fb00142bd818.mockapi.io/api/posts/${postId}/postComments`, comment);
  }

  saveImage(mainImage){
    
    this.images.push(mainImage);
  }
  getImages(){
    return this.images;
  }
 
  saveLikes(like){
    this.likes.push(like);
  }
  getLikes(){
    
    
    return this.likes[this.likes.length-1]+1;
  }

}
