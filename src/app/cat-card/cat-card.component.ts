
import { cats } from './../../registered-cats';
import { CatDetailsComponent } from './../cat-details/cat-details.component';
import { Component, OnInit, Inject ,Input} from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '@angular/material';
import { MatDialog } from '@angular/material';
import { CatstagramApiService } from './../catstagram-api.service';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import * as _swal from 'sweetalert';


import Swal from 'sweetalert2';





@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {
  //cats:Cats[]=[];
  @Input() id: number;
  @Input() mainImage:string;
  @Input() headerImage:string;
  @Input() title:string;
  @Input() subtitle:string;
  @Input() description:string;
  @Input() like:number;
  @Input() cat:Cats[]=[];
  
  
  disabled:string;
  numLikes:number;
  
  
  constructor(public dialog: MatDialog,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private apiService: CatstagramApiService,
    
    ){
      this.cat=this.cat;
   
    this.disabled="false";
    
    iconRegistry.addSvgIcon(
      'thumbs-up',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/thumbup-icon.svg'));
    
      this.apiService.getPosts().subscribe((receivedPosts)=>{
        this.cat = receivedPosts;
      });
  }
 
  onClick(cats){
    const dialogRef = this.dialog.open(CatDetailsComponent,
     {
     width: '750px',
     height: '700px',
     data: {clickedPost:cats}
     });

     dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });

    }
    // numberOfLikes(){

    //   this.numLikes = 0;
    //   this.apiService.saveLikes(this.numLikes);
    //   this.numLikes = this.apiService.getLikes();

    //   this.disabled="true";
      
    // }
    numberOfLikes(){
      
      
      this.like = this.like + 1;
      this.update();
      this.disabled="true";
    }

    update(){
      var post = {
        "id":this.id,
        "mainImage":this.mainImage,
        "headerImage":this.headerImage,
        "title":this.title,
        "subtitle":this.subtitle,
        "description":this.description,
        "like":this.like
      }
      this.apiService.updatePost(post,this.id).subscribe((res)=>{
        console.log("Post Updated.")
      });
    }


    saveImage(){

      Swal.fire({
        text:"Saved!",
        //padding:50,
        width:400,
        timer:500,
        showConfirmButton:false,
        heightAuto:false
      });

      this.apiService.saveImage(this.mainImage);
    }
    ngOnInit() {
      
  
    }

}

