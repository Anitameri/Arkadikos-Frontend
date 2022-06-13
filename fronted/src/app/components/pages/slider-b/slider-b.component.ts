import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider-b',
  templateUrl: './slider-b.component.html',
  styleUrls: ['./slider-b.component.css']
})
export class SliderBComponent implements OnInit {
  peliculas:any[]=[
    {name:'Merchan1',
    img:'assets/images/gameboy.jpg',
    desc:'Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.'},
    {
      name:'Merchan2',
      img:'assets/images/f95zone-gaming-community.png',
      desc:'Pennsylvania, 1956. Frank Sheeran, a war veteran of Irish origin who works as a truck driver, accidentally meets mobster Russell Bufalino. Once Frank becomes his trusted man, Bufalino sends him to Chicago with the task of helping Jimmy Hoffa, a powerful union leader related to organized crime, with whom Frank will maintain a close friendship for nearly twenty years.'
    }
  ];

  constructor(private _config:NgbCarouselConfig) {
    _config.interval = 3000;
    _config.pauseOnHover = true;
    _config.showNavigationArrows = false;
  }

  ngOnInit() {
  }

}
