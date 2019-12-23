import { DomSanitizer } from '@angular/platform-browser';
import { Component } from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'feit-instagram-app';

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
        'paw-print',
        sanitizer.bypassSecurityTrustResourceUrl('assets/icons/pawprint.svg'));
  }
}
