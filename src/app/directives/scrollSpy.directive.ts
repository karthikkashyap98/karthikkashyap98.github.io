import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appScrollSpy]',
  standalone: true,
})
export class ScrollSpyDirective {
  @Input() spyTargets: string[] = []; // IDs of the sections to track
  @Output() activeSection = new EventEmitter<string>(); // Emit the active section

  // Listen to the window's scroll event globally
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    this.checkActiveSection();
  }

  private checkActiveSection(): void {
    let currentActive = '';
    this.spyTargets.forEach((id) => {
      const section = document.getElementById(id);
      if (section) {
        const rect = section.getBoundingClientRect();
        // Check if the section is in the viewport
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          currentActive = id;
        }
      }
    });
    if (currentActive) {
      this.activeSection.emit(currentActive);
    }
  }
}
