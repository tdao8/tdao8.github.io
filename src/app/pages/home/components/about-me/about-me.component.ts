import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit {

  public skillLists = [
    {name: 'Java', value: 80},
    {name: '.Net Core', value: 70},
    {name: 'Angular', value: 60},
    {name: 'Linux', value: 50},
    {name: 'Devops, etc...', value: 50},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
