import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TutorialModule } from 'src/app/tutorial/tutorial.module';

const routes: Routes = [
  //TODO
  // 아래와 같이 설정해도 동일하게 적용됨
  // {
  //   path: '',
  //   loadChildren: 'app/tutorial/tutorial.module#TutorialModule'
  // }
  {
    path: '',
    loadChildren: () => TutorialModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
