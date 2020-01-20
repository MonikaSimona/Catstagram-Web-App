
import { CardListComponent } from './../card-list/card-list.component';
import { cats } from 'src/registered-cats';
import { CatstagramApiService } from './../catstagram-api.service';
import { Component, OnInit, Inject,Input,Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


export interface DialogData {
  
  clickedPost: Cats;
}
@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {
  
  
  @Input() mainImage:string;
  @Input() id:number;
  headerImage;
 
  postComments: PostComments[] = [];
  newComment: PostComments;
  constructor(
    public dialogRef: MatDialogRef<CatDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private apiService: CatstagramApiService
  ) {
    
    this.newComment = {
      
      id: this.data.clickedPost.id,
      accountName:'_catty_',
      comment : '',
      photoUrl:'https://static01.nyt.com/images/2019/06/04/nyregion/04claws2/04claws2-videoSixteenByNineJumbo1600.jpg',
      fullName:' Catty TheCat'

    };
   
    
    
   

    this.apiService.getPostComments(this.data.clickedPost.id)
    .subscribe((comments)=>{this.postComments = comments;});
    


   }
    onComment(){

      this.apiService.postComment(this.data.clickedPost.id,this.newComment)
      .subscribe(()=>{console.log("Posted new comment");});
        
      this.newComment.comment='';
      
    }
  ngOnInit() {
    
    
  }

}
