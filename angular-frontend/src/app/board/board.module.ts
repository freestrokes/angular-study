import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/common/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { BoardListComponent } from 'src/app/board/list/board-list.component';
import { BoardDetailComponent } from 'src/app/board/detail/board-detail.component';
import { BoardAddComponent } from 'src/app/board/add/board-add.component';

import { BoardService } from 'src/app/board/board.service';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    SharedModule,
    NgxPaginationModule,
    RouterModule.forChild([
      {
        path: '',
        redirectTo: 'board/list',
        pathMatch: 'full'
      },
      {
        path: 'board/list',
        component: BoardListComponent
      },
      {
        path: 'board/add',
        component: BoardAddComponent
      },
      {
        path: 'board/:id',
        component: BoardDetailComponent
      }
    ])
  ],
  declarations: [
    BoardListComponent,
    BoardAddComponent,
    BoardDetailComponent
  ],
  providers: [
    BoardService
  ]
})
export class BoardModule {
}
