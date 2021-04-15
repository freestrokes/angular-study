import {Component, OnInit} from '@angular/core';
import {UserService} from '../core/user.service';
import {User} from '../core/user';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public title = 'User Information';
  public user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }

}
