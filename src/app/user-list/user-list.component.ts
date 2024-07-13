import { Component, OnInit } from '@angular/core';
import { User } from '../../user.model';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userService: UsersService){}
  
  ngOnInit(): void {
    
    this.userService.getUsers().subscribe({
      next: (users) => {this.users = users},
      error: (error) => console.error("Error fetching users", error)
    })


  }

}
