import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TutorialsListComponent } from './tutorials-list/tutorials-list.component';
import { TutorialDetailsComponent } from './tutorial-details/tutorial-details.component';
import { AddTutorialComponent } from './add-tutorial/add-tutorial.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'tutorial',
        pathMatch: 'full'
      },
      {
        path: 'tutorial',
        component: TutorialsListComponent
      },
      {
        path: 'tutorial/:id',
        component: TutorialDetailsComponent
      },
      {
        path: 'add',
        component: AddTutorialComponent
      }
    ])
  ],
  declarations: [
    TutorialsListComponent,
    TutorialDetailsComponent,
    AddTutorialComponent
  ],
  providers: [
  ]
})
export class TutorialModule {
}
