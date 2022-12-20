import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.css']
})

export class AddProjectsComponent implements OnInit {

  constructor(private _location: Location)
  {}

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
  }

}
