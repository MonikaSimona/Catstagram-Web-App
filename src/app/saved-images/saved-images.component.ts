import { CatstagramApiService } from './../catstagram-api.service';
import { Component, OnInit, Input } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-saved-images',
  templateUrl: './saved-images.component.html',
  styleUrls: ['./saved-images.component.css']
})
export class SavedImagesComponent implements OnInit {
images:SavedImages []=[];
image:SavedImages;
del : SavedImages[]=[];


  constructor(
    private apiService : CatstagramApiService
  ) {
    
      
    this.apiService.getImages().subscribe((receivedImages)=>{
      this.images=receivedImages;
      
    })


   }
   delete(image){
    Swal.fire({
      text:"Deleted!",
      //padding:50,
      width:400,
      timer:500,
      showConfirmButton:false,
      heightAuto:false
    });
     this.image=image;
     this.apiService.deleteImages(this.image.id).subscribe();
     
    //  for(let i=0;i<this.images.length;i++){
      
    //       if(this.images[i].id==image.id){
            
            
    //         this.del = this.images.slice(0,i);
    //         console.log(this.del)
    //       }
    //  }
    //  this.del.pop();
    //  console.log(this.del.pop())

     console.log("Image Deleted");
   }

  ngOnInit() {
    
  }

}
