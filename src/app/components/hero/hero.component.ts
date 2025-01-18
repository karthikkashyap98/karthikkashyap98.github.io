import { Component, OnInit } from '@angular/core';
import { IconsModule } from '../details/icons.module';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  imports: [IconsModule],
  standalone: true,
})
export class HeroComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
