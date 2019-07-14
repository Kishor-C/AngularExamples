import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {Router} from '@angular/router'

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  message : string;
  constructor(private service : UserService, private router : Router) { }

  ngOnInit() {
  }
  handleSubmit(loginValue : any) {
    this.service.authenticate(loginValue)
    .subscribe(body => {
      this.router.navigate(["success", body.userid]);  // success -> SuccessComponent
    });
  }
}
