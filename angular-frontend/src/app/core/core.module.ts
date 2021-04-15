import {NgModule} from '@angular/core';

// UserService 등록
import {UserService} from './user.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    UserService
  ],
  exports: []
})
export class CoreModule {}
