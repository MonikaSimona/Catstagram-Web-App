import { cats } from './../../registered-cats';
import { CatDetailsComponent } from './../cat-details/cat-details.component';
import { Component, OnInit, Inject ,Input} from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '@angular/material';
import { MatDialog } from '@angular/material';
import { CatstagramApiService } from './../catstagram-api.service';



@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {
  cats:Cats[] = [];
  @Input() id: number;
  @Input() mainImage:string;
  @Input() title:string;
  @Input() subtitle:string;
  @Input() description:string;
  
  constructor(public dialog: MatDialog){
    
  }
 
  onClick(cats:Cats){
    const dialogRef = this.dialog.open(CatDetailsComponent,
     {
     width: '750px',
     height: '700px',
     data: {clickedPost:cats}
     });

     dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // // this.animal = result;
    });

    }
    ngOnInit() {


    }

}

