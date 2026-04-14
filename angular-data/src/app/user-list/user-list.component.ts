import { Component } from '@angular/core';
import { UserItemComponent } from '../user-item/user-item.component';

@Component({
  selector: 'app-user-list',
  imports: [UserItemComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent{
  names: string[]; 
  constructor() { 
     this.names = ['Ari', 'Carlos', 'Felipe', 'Nate']; 
  }
  ngOnInit() {
  }
}