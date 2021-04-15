import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

// SharedModule 등록
import {SharedModule} from '../shared/shared.module';

// HomeComponent 등록
import {HomeComponent} from './home.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    HomeComponent // HomeComponent 선언
  ],
  providers: [],
  exports: [
    HomeComponent // HomeComponent 공개
  ]
})
export class HomeModule {}
