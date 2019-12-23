import { CatstagramApiService } from './../catstagram-api.service';
import { CatDetailsComponent } from './../cat-details/cat-details.component';
import { Component, OnInit, Inject ,Input} from '@angular/core';
import { cats } from 'src/registered-cats'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cats:Cats[] = [];

  

  constructor(public dialog: MatDialog,private apiService: CatstagramApiService) {
    // this.cats=[
    //   {
    //     id:1,
    //     title: 'Catastrophic',
    //     subtitle: 'Famous Cat',
    //     headerImage: 'assets/img/cat1.jpg' ,
    //     mainImage: 'assets/img/cat1.jpg',
    //     description: 'Morning selfie of a regular cat' 
    //   },
    //   {
    //     id:2,
    //     title: 'Sweet Kitten',
    //     subtitle: 'Kitten',
    //     headerImage: 'https://peopledotcom.files.wordpress.com/2019/04/julian-assange-cat.jpg' ,
    //     mainImage: 'assets/img/kitten.jpg',
    //     description: 'Look at how cute I am.. aww to myself' 
    //     },
    //   {
    //     id:3,
    //     title: 'Yellow Trouble',
    //     subtitle: 'The Trouble Maker',
    //     headerImage: 'https://peopledotcom.files.wordpress.com/2019/04/julian-assange-cat.jpg' ,
    //     mainImage: 'assets/img/yellowCat.jpg',
    //     description: 'Thinkig about the next trouble of the day...' 
    //   }
    // ];

     this.apiService.getPosts().subscribe((receivedPosts)=>{this.cats = receivedPosts;});

   }
   onClick(cat:Cats){
     const dialogRef = this.dialog.open(CatDetailsComponent,
      {
      width: '750px',
      height: '700px',
      data: {clickedPost:cat}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        // // this.animal = result;
      });
   }

  ngOnInit() {
  }

}
