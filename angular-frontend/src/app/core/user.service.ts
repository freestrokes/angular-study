import {Injectable} from '@angular/core';

// User interface 등록
import {User} from './user';

@Injectable()
export class UserService {
  public getUser(): User {
    return {
      id: 1,
      name: 'harry',
      admin: true
    };
  }
}
