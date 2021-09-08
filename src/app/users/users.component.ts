import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any;
  public errorMsg: any;
  show: Boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit():void {
    this.show = false;
    this.userService.getUsers().subscribe(
      (data) => this.users = data,
      (error) => this.errorMsg = error,
      () => console.log('the sequence completed!')
    );
  }

}
