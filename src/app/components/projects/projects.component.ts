import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
// Angular Material Modules
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule, MatCardModule, MatButtonModule, CarouselComponent],
  standalone: true,
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      title: 'Project One',
      description:
        'A sleek black and cream project featuring responsive design.',
      image: 'https://picsum.photos/500/300?random=1', // Replace with actual image path
      github: 'https://github.com/username/project-one',
      link: 'https://project-one-live.com',
    },
    {
      title: 'Project Two',
      description: 'A minimalist portfolio using black and cream color themes.',
      image: 'https://picsum.photos/500/300?random=2', // Replace with actual image path
      github: 'https://github.com/username/project-two',
      link: 'https://project-two-live.com',
    },
    {
      title: 'Project Three',
      description:
        'A blog site design with a sophisticated black and cream palette.',
      image: 'https://picsum.photos/500/300?random=3', // Replace with actual image path
      github: 'https://github.com/username/project-three',
      link: 'https://project-three-live.com',
    },
  ];

  syncableImages = [
    { src: 'assets/Landing.png', alt: 'Syncable Screenshot 2' },
    { src: 'assets/Dashboard.jpg', alt: 'Syncable Screenshot 1' },
    { src: 'assets/Scheduling.jpg', alt: 'Syncable Screenshot 3' },
  ];

  redditImages = [
    { src: 'assets/RedditClone.png', alt: 'Reddit Clone Architecture' },
    { src: 'assets/Database.png', alt: 'Reddit Clone DB' },
  ];

  items = [{ title: 'Slide 1' }, { title: 'Slide 2' }, { title: 'Slide 3' }];
  constructor() {}

  ngOnInit(): void {}
}
