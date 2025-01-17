import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class ExperienceComponent implements OnInit {
  timelineItems = [
    {
      date: 'April 2022 - August 2024',
      title: 'Software Development Engineer - 2',
      company: 'Zetwerk Manufacturing Private Limited',
    },
    {
      date: 'Decemeber 2022 - April 2022',
      title: 'Software Development Engineer - 1',
      company: 'Zetwerk Manufacturing Private Limited',
    },
    {
      date: 'March 2020 - September 2020',
      title: 'Software Development Intern',
      company: 'Netgear Research India Private Limited',
    },
    {
      date: 'February 2020 - August 2020',
      title: 'Software Development Engineer Intern',
      company: 'Resolute AI',
    },
  ];

  constructor() {}

  ngOnInit() {}
}
