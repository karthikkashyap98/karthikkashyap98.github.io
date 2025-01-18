import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CursorGlowService } from './cursor-glow.service';
import { ScrollSpyDirective } from './directives/scrollSpy.directive';
import { BlogsComponent } from './components/blogs/blogs.component';
import { DetailsComponent } from './components/details/details.component';
import { FooterComponent } from '../../dist/browser/components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    HeroComponent,
    ProjectsComponent,
    ScrollSpyDirective,
    BlogsComponent,
    DetailsComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  title = 'portfolio-site';

  activeSection = '';

  constructor(private cursorGlowService: CursorGlowService) {
    this.cursorGlowService.initGlowEffect();
  }
  ngOnDestroy(): void {
    this.cursorGlowService.destroyGlowEffect();
  }

  onSectionChange(section: string): void {
    console.log(section);
    this.activeSection = section;
  }
}
