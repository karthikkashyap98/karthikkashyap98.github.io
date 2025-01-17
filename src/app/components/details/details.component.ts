// app-about.component.ts
import { CommonModule } from '@angular/common';

// app-about.component.ts
import { Component } from '@angular/core';
import { FeatherComponent, FeatherModule } from 'angular-feather';
import {
  Server,
  Cloud,
  Database,
  Layout,
  Download,
} from 'angular-feather/icons';
import { IconsModule } from './icons.module';

const icons = {
  Server,
  Cloud,
  Database,
  Layout,
  Download,
};

interface Skill {
  title: string;
  description: string;
  technologies: string[];
  icon: string;
}

interface TimelineItem {
  role: string;
  company: string;
  period: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  standalone: true,
  imports: [CommonModule, IconsModule],
})
export class DetailsComponent {
  activeTab = 'skills';

  skills: Skill[] = [
    {
      title: 'Backend Infrastructure',
      description: 'Building scalable server architectures and RESTful APIs',
      technologies: ['Node.js', 'Express', 'Django', 'Flask', 'Microservices'],
      icon: 'server',
    },
    {
      title: 'Cloud & DevOps',
      description: 'Infrastructure automation and cloud deployment',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
      icon: 'cloud',
    },
    {
      title: 'Database Systems',
      description: 'Database design and optimization',
      technologies: ['MongoDB', 'PostgreSQL', 'Redis', 'Kafka'],
      icon: 'database',
    },
    {
      title: 'Frontend Development',
      description: 'Creating responsive and interactive user interfaces',
      technologies: ['Angular', 'React', 'TypeScript', 'HTML/CSS'],
      icon: 'layout',
    },
  ];

  timeline: TimelineItem[] = [
    {
      role: 'Software Development Engineer - 2',
      company: 'Zetwerk Manufacturing Private Limited',
      period: 'April 2022 – August 2024',
    },
    {
      role: 'Software Development Engineer - 1',
      company: 'Zetwerk Manufacturing Private Limited',
      period: 'December 2020 – April 2022',
    },
    {
      role: 'Full-Stack Development Intern',
      company: 'Netgear Research India Pvt Ltd',
      period: 'March 2020 – September 2020',
    },
  ];

  education = [
    {
      school: 'University of Florida',
      degree: 'Master of Science in Computer Science',
      period: 'Aug. 2024 – May 2026',
      location: 'Gainesville, FL',
    },
    {
      school: 'Dayananda Sagar College of Engineering',
      degree: 'Bachelor of Engineering in Telecommunication',
      period: 'Aug. 2016 – Aug 2020',
      location: 'Bangalore, India',
    },
  ];

  switchTab(tab: string) {
    this.activeTab = tab;
  }

  downloadResume() {
    // Implement resume download logic
    console.log('Downloading resume...');
  }
}
