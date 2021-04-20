import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TutorialListComponent } from 'src/app/tutorial/tutorial-list/tutorial-list.component';
import { TutorialDetailComponent } from 'src/app/tutorial/tutorial-detail/tutorial-detail.component';
import { AddTutorialComponent } from 'src/app/tutorial/add-tutorial/add-tutorial.component';

import { TutorialService } from 'src/app/tutorial/tutorial.service';

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
        component: TutorialListComponent
      },
      {
        path: 'tutorial/:id',
        component: TutorialDetailComponent
      },
      {
        path: 'add',
        component: AddTutorialComponent
      }
    ])
  ],
  declarations: [
    TutorialListComponent,
    TutorialDetailComponent,
    AddTutorialComponent
  ],
  providers: [
    TutorialService
  ]
})
export class TutorialModule {
}
