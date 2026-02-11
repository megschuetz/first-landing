import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone: false,
})
export class LandingPageComponent implements OnInit {
  ngOnInit() {
    const header = document.querySelector('header');
    header?.classList.add('start-transition-header');
    header?.classList.remove('end-transition-header');

    const title = document.querySelector('h1');
    title?.classList.remove('smaller-text');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollOffset >= 60) {
      const header = document.querySelector('header');
      const title = document.querySelector('h1');
      header?.classList.add('end-transition-header');
      title?.classList.add('smaller-text');
    } else {
      const header = document.querySelector('header');
      const title = document.querySelector('h1');
      header?.classList.remove('end-transition-header');
      title?.classList.remove('smaller-text');
    }
  }

  ngOnDestroy() {
    const title = document.querySelector('h1');
    title?.classList.add('smaller-text');

    const header = document.querySelector('header');
    header?.classList.remove('start-transition-header');
    header?.classList.add('end-transition-header');
  }
}
