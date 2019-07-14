import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'
@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  loggedInId : number;
  constructor(private activatedRoute : ActivatedRoute) { }

  ngOnInit() { // success/:id
    this.activatedRoute.paramMap.subscribe((p : Params) => {
      this.loggedInId = p.params.id;
    });
  }
}
