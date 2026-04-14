import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [],
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() name: string; 
  constructor() { 
    this.name = ''; 
  }
  ngOnInit() {
  }
}