import { cats } from './../registered-cats';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatstagramApiService {
  images = [];
  

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
  updatePost(post:Cats,postId:number){
    
    return this.http.put(`http://5e00dea0685ac80014514fa8.mockapi.io/api/cats/posts/${postId}`,post);
    
  }
  getImages():Observable<SavedImages[]>{
    
    return this.http.get<SavedImages[]>('https://5e246f16c5fc8f001465d13e.mockapi.io/images/images');
  }

  saveImage(image:SavedImages){
    
    return this.http.post(`https://5e246f16c5fc8f001465d13e.mockapi.io/images/images`,image);
    
  }
  deleteImages(imageId:number){
    
    return this.http.delete(`https://5e246f16c5fc8f001465d13e.mockapi.io/images/images/${imageId}`);
  
  }
  

}
