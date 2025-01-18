// footer.component.ts
import { Component } from '@angular/core';
import { IconsModule } from '../../../../src/app/components/details/icons.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [IconsModule, CommonModule],
  standalone: true,
})
export class FooterComponent {
  get currentYear() {
    return new Date().getFullYear();
  }

  socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/karthikkashyap98',
      icon: 'github',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/karthikskashyap',
      icon: 'linkedin',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/kkashyap98',
      icon: 'instagram',
    },
    {
      name: 'Email',
      url: 'mailto:karthikkashyap98@gmail.com',
      icon: 'mail',
    },
  ];
}
