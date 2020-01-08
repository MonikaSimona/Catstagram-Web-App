import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  slideToggleState=false;

  constructor() { }

  ngOnInit() {
    if(!this.slideToggleState){
      this.slideToggleState=true;
    }
    
  }
  checked(){
    
  }

}
