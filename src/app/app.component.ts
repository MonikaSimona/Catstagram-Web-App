import { CatCardComponent } from './cat-card/cat-card.component';
import { CardListComponent } from './card-list/card-list.component';
import { CatstagramApiService } from './catstagram-api.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import { MatDialog } from '@angular/material';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'feit-instagram-app';
  

  constructor(iconRegistry: MatIconRegistry,
    iconRegistry2:MatIconRegistry,
     sanitizer: DomSanitizer,
     sanitizer2:DomSanitizer) {

    iconRegistry.addSvgIcon(
        'paw-icon',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/iconPaw-01.svg'));

    iconRegistry2.addSvgIcon(
      'icon-dark', 
        sanitizer2.bypassSecurityTrustResourceUrl('assets/icons/iconDark-01.svg'));
        
  }
 

}
