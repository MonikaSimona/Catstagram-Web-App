import { cats } from 'src/registered-cats';
import { CatDetailsComponent } from './../cat-details/cat-details.component';
import { Component, OnInit, Inject, Input, Output } from '@angular/core';

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
  // @Output() id:number;
  @Input() mainImage:string;
  @Input() headerImage:string;
  @Input() title:string;
  @Input() subtitle:string;
  @Input() description:string;
  @Input() like:number;
  
  
  imageId:number;
  disabled:string;
  numLikes:number;
  
 
  constructor(public dialog: MatDialog,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer,
    private apiService: CatstagramApiService,
    
    ){
      this.catPost=this.catPost;
      this.imageId=0;
      
      this.disabled="false";
    
      
      iconRegistry.addSvgIcon(
      'thumbs-up',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/thumbup-icon.svg'));
     
     
  }
  ngOnInit() { }

  @Input() catPost={
    "id":this.id,
    "mainImage":this.mainImage,
    "headerImage":this.headerImage,
    "title":this.title,
    "subtitle":this.subtitle,
    "description":this.description,
    "like":this.like
  };

  onClick(cat:Cats){
    const dialogRef = this.dialog.open(CatDetailsComponent,
     {
     width: '1050px',
     height: '700px',
     data: {clickedPost:cat}
     });

     dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });

    }
  
    numberOfLikes(){
      
      
      this.like = this.like + 1;
      this.update();
      this.disabled="true";
    }

    update(){
      var catPost = {
        "id":this.id,
        "mainImage":this.mainImage,
        "headerImage":this.headerImage,
        "title":this.title,
        "subtitle":this.subtitle,
        "description":this.description,
        "like":this.like
      }
      this.apiService.updatePost(catPost,this.catPost.id).subscribe((res)=>{
        console.log("Post Updated.")
      });
    }


    saveImage(){

      Swal.fire({
        text:"Saved!",
        width:400,
        timer:500,
        showConfirmButton:false,
        heightAuto:false
      });
      this.imageId=this.imageId+1;
      
      var image = {
        "id":this.imageId,
        "mainImage":this.mainImage
      }
      this.apiService.saveImage(image).subscribe((res)=>{
        console.log("Image saved");
      });
    }
  }

