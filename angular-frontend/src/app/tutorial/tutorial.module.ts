import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';

import { TutorialListComponent } from 'src/app/tutorial/tutorial-list/tutorial-list.component';
import { TutorialDetailComponent } from 'src/app/tutorial/tutorial-detail/tutorial-detail.component';
import { TutorialAddComponent } from 'src/app/tutorial/tutorial-add/tutorial-add.component';

import { TutorialService } from 'src/app/tutorial/tutorial.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'tutorial/list',
        pathMatch: 'full'
      },
      {
        path: 'tutorial/list',
        component: TutorialListComponent
      },
      {
        path: 'tutorial/add',
        component: TutorialAddComponent
      },
      {
        path: 'tutorial/:id',
        component: TutorialDetailComponent
      }
    ])
  ],
  declarations: [
    TutorialListComponent,
    TutorialDetailComponent,
    TutorialAddComponent
  ],
  providers: [
    TutorialService
  ]
})
export class TutorialModule {
}
