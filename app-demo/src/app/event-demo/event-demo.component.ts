import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-demo',
  templateUrl: './event-demo.component.html',
  styleUrls: ['./event-demo.component.css']
})
export class EventDemoComponent implements OnInit {
  username : string;
  password : string;
  handleClick() {
   console.log('Username is '+this.username);
   console.log('Password is '+this.password);
  }
  constructor() { }

  ngOnInit() {
  }

}
