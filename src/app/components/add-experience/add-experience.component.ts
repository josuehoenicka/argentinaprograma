import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-add-experience',
  templateUrl: './add-experience.component.html',
  styleUrls: ['./add-experience.component.css']
})
export class AddExperienceComponent implements OnInit {

  constructor(private _location: Location)
  {}

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
  }

}
