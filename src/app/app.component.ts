import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'first-landing';


@HostListener('window:scroll', [])
onWindowScroll() {
    const scrollOffset = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (scrollOffset >= 30) {
        const header = document.querySelector('header')
        const title = document.querySelector('h1')

    
        header?.classList.add('scroll-size-header')
        title?.classList.add('smaller-text')
       
    } else {
        const header = document.querySelector('header')
        const title = document.querySelector('h1')


        header?.classList.remove('scroll-size-header')
        title?.classList.remove('smaller-text')

    }
}
}
