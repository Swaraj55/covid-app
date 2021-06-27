import { Component, OnInit } from '@angular/core';
import { fadeIn, slideInFromLeft, slideInFromRight } from '../animate';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    fadeIn,
    slideInFromRight,
    slideInFromLeft
  ]
})
export class HomePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
