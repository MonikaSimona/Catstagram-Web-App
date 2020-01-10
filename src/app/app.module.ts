import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatGridListModule} from '@angular/material/grid-list'; 
import {MatButtonModule} from '@angular/material/button';
import { CatCardComponent } from './cat-card/cat-card.component';
import {MatIconModule} from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';
import { SettingsComponent } from './settings/settings.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CatDetailsComponent } from './cat-details/cat-details.component';
import { MatDialogModule} from '@angular/material/dialog';
import { CardListComponent } from './card-list/card-list.component';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import Swal from 'sweetalert2';
import { SavedImagesComponent } from './saved-images/saved-images.component';


 

@NgModule({
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '',component:CardListComponent},
      { path: 'cat-card', component: CatCardComponent},
      { path: 'settings', component: SettingsComponent},
      { path: 'saved-images', component: SavedImagesComponent}
      
    ]),
    BrowserAnimationsModule,
  ],
  declarations: [
    AppComponent,
    CatCardComponent,
    SettingsComponent,
    ToolbarComponent,
    CatDetailsComponent,
    CardListComponent,
    SavedImagesComponent
    
  ],
  providers: [],
  entryComponents: [CatDetailsComponent, CatCardComponent,CardListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
