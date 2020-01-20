import { cats } from './../../registered-cats';
import { CatstagramApiService } from './../catstagram-api.service';
import { CatDetailsComponent } from './../cat-details/cat-details.component';
import { Component, OnInit, Inject ,Input} from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cats:Cats[]=[];
 
  

  

  constructor(public dialog: MatDialog,private apiService: CatstagramApiService) {
   
      this.getPosts();
      
      
   }

   getPosts(){
    this.apiService.getPosts().subscribe((receivedPosts)=>{
      this.cats = receivedPosts;
    });
      
   }
   
  

  ngOnInit() {
    
    
   
  }

}
