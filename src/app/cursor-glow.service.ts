import { Injectable, Renderer2, RendererFactory2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class CursorGlowService {
  private renderer: Renderer2;
  private glowElement: HTMLElement | null = null;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initGlowEffect(): void {
    if (this.glowElement) return;

    // Create the glow element
    this.glowElement = this.renderer.createElement('div');
    this.renderer.setStyle(this.glowElement, 'position', 'fixed');
    this.renderer.setStyle(this.glowElement, 'width', '30px');
    this.renderer.setStyle(this.glowElement, 'height', '30px');
    this.renderer.setStyle(
      this.glowElement,
      'background',
      'radial-gradient(circle, rgba(245, 245, 220, 0.2), rgba(0, 0, 255, 0.2))'
    );
    this.renderer.setStyle(this.glowElement, 'border-radius', '50%');
    this.renderer.setStyle(this.glowElement, 'pointer-events', 'none');
    this.renderer.setStyle(
      this.glowElement,
      'transform',
      'translate(-50%, -50%)'
    );
    this.renderer.setStyle(this.glowElement, 'z-index', '1000');
    this.renderer.setStyle(
      this.glowElement,
      'animation',
      'glow-pulse 3.5s infinite ease-in-out'
    );

    // Add the glow element to the document body
    this.renderer.appendChild(this.document.body, this.glowElement);

    // Track mouse movements
    this.document.addEventListener('mousemove', this.updatePosition);
  }

  private updatePosition = (event: MouseEvent): void => {
    if (this.glowElement) {
      this.renderer.setStyle(this.glowElement, 'top', `${event.clientY}px`);
      this.renderer.setStyle(this.glowElement, 'left', `${event.clientX}px`);
    }
  };

  destroyGlowEffect(): void {
    if (this.glowElement) {
      this.renderer.removeChild(this.document.body, this.glowElement);
      this.glowElement = null;
      this.document.removeEventListener('mousemove', this.updatePosition);
    }
  }
}
