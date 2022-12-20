import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-config-experience',
  templateUrl: './config-experience.component.html',
  styleUrls: ['./config-experience.component.css']
})
export class ConfigExperienceComponent implements OnInit {

  name:any;
  experience:any;
  certification:any;

  constructor(private check:PortfolioService, private _location: Location)
  {}

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
    this.check.test().subscribe(data => {
      this.name=data;
      this.experience=data.experience;
      this.certification=data.education;
    });
  }

}
