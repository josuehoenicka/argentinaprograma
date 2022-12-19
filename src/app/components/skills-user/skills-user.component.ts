import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills-user',
  templateUrl: './skills-user.component.html',
  styleUrls: ['./skills-user.component.css']
})

export class SkillsUserComponent implements OnInit {

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
