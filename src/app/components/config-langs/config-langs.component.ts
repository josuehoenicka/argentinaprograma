import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';


@Component({
  selector: 'app-config-langs',
  templateUrl: './config-langs.component.html',
  styleUrls: ['./config-langs.component.css']
})
export class ConfigLangsComponent implements OnInit {

  name:any;
  lang:any;
  tech:any;

  constructor(private check:PortfolioService) { }

  ngOnInit(): void {
    this.check.test().subscribe(data => {
      this.name=data;
      this.lang=data.languages;
      this.tech=data.techs;
    });
  }

}
