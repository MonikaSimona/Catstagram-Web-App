import { CatstagramApiService } from './../catstagram-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-images',
  templateUrl: './saved-images.component.html',
  styleUrls: ['./saved-images.component.css']
})
export class SavedImagesComponent implements OnInit {
images:SavedImages []=[];
image:SavedImages;

  constructor(
    private apiService : CatstagramApiService
  ) {
    this.apiService.getImages().subscribe((receivedImages)=>{
      this.images=receivedImages;
    })


   }
   delete(image){
     this.image=image;
     this.apiService.deleteImages(this.image.id).subscribe();
     this.images.pop();
   }

  ngOnInit() {
    
  }

}
