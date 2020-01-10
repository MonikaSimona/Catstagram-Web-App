import { CatstagramApiService } from './../catstagram-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-images',
  templateUrl: './saved-images.component.html',
  styleUrls: ['./saved-images.component.css']
})
export class SavedImagesComponent implements OnInit {
images;
  constructor(
    private apiService : CatstagramApiService
  ) {
    this.images = this.apiService.getImages();


   }

  ngOnInit() {
    this.images = this.apiService.getImages();
  }

}
