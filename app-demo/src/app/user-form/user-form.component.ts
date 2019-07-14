import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  generatedId : number;
  constructor(private service : UserService) { }

  ngOnInit() {
  }
  handleSubmit(formValue : any) { 
    this.service.registration(formValue)
      .subscribe(response => this.generatedId = response.userId);
  }
}
