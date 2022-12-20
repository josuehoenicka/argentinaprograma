import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-config-experiences',
  templateUrl: './config-experiences.component.html',
  styleUrls: ['./config-experiences.component.css']
})

export class ConfigExperiencesComponent implements OnInit {

  name:any;
  exp:any;

  constructor(private check:PortfolioService, private _location: Location)
  {}

  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
    this.check.test().subscribe(data => {
      this.name=data;
      this.exp=data.experience;
    });
  }

}
