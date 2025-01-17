import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.scss',
})
export class BlogsComponent {
  constructor() {}
  blogs: any = [
    {
      title:
        'MongoDB Query Optimization: A Developer’s Guide to Boosting Performance',
      description: 'Practical solutions to improve MongoDB query performance.',
      link: 'https://medium.com/@karthikkashyap_84962/mongodb-query-optimization-a-developers-guide-to-boosting-performance-3a0fd4c884c5',
      image: 'assets/MongoDB.png',
      readTime: 10,
    },
    {
      title: 'How Pony Makes Concurrent Programming Safe by Design',
      description:
        'Exploring Pony’s features to make concurrent programming safe.',
      link: 'https://medium.com/@karthikkashyap_84962/how-pony-makes-concurrent-programming-safe-by-design-730d69921d0e',
      image: 'assets/Pony.jpg',
      readTime: 6,
    },
    {
      title: 'Final solution for macOS’ terrible window management',
      description:
        'Transforming macOS window management with i3wm-inspired design tools and a touch of customization.',
      link: 'https://medium.com/@karthikkashyap_84962/final-solution-for-macos-terrible-window-management-08018b63c32a',
      image: 'assets/Aerospace.gif',
      readTime: 4,
    },
  ];

  ngOnInit() {}

  openBlog(blog: any) {
    window.open(blog.link, '_blank');
  }
}
