import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule],
  standalone: true,
})
export class HeaderComponent implements OnInit {
  constructor() {}
  isMobileMenuOpen: boolean = false;

  ngOnInit() {
    this.activeSection = 'hero';
  }
  @Input() activeSection: string = 'hero';

  isDarkTheme = false;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
    document.body.classList.toggle('dark-theme');
  }
  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      // section.scrollIntoView({ behavior: 'smooth' });
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    document.body.classList.toggle('mobile-menu-open');
  }

  closeMobileMenu(): void {
    if (this.isMobileMenuOpen) {
      this.isMobileMenuOpen = false;
      document.body.classList.remove('mobile-menu-open');
    }
  }
}
