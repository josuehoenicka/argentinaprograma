import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-config-education',
  templateUrl: './config-education.component.html',
  styleUrls: ['./config-education.component.css']
})

export class ConfigEducationComponent implements OnInit {

  name:any;
  edu:any;

  constructor(private check:PortfolioService, private _location: Location)
  {}

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
    this.check.test().subscribe(data => {
      this.name=data;
      this.edu=data.education;
    });
  }

}

