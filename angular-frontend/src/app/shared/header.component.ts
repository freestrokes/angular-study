import {Component, OnInit, Input} from '@angular/core';
import {UserService} from '../core/user.service';
import {User} from '../core/user';

@Component({
  selector: 'app-header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  public title: string;

  public user: User;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();


    const clickButton = document.getElementById('clickButton');

    clickButton.addEventListener('click', function() {
      console.log(this === clickButton); // true
    });
  }
}
