import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ExperienceComponent } from '../experience/experience.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [CommonModule, ExperienceComponent],
  standalone: true,
})
export class AboutComponent implements OnInit {
  constructor() {}

  activeTab = 'skills';

  ngOnInit() {}
}
