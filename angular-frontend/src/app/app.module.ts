import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import { AddTutorialComponent } from './components/add-tutorial/add-tutorial.component';
import { TutorialDetailsComponent } from './components/tutorial-details/tutorial-details.component';
import { TutorialsListComponent } from './components/tutorials-list/tutorials-list.component';

/* TEST */
// HomeModule 등록
import {HomeModule} from './feature/home.module';

// CoreModule 등록
import {CoreModule} from './core/core.module';
import {GroundUnit} from './ground-unit';
/* TEST*/

@NgModule({
  declarations: [
    AppComponent,
    AddTutorialComponent,
    TutorialDetailsComponent,
    TutorialsListComponent
  ],
  imports: [
    // BrowserModule.withServerTransition({ appId: 'serverApp' })
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HomeModule,
    CoreModule
  ],
  providers: [
    GroundUnit
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
