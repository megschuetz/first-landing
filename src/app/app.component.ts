import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { Dot, Mouse } from './helpers/dot-helper'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'first-landing';
  dots: Dot[] = []
  mouse: Mouse = {
    x: 0,
    y: 0
  }

  constructor(public element: ElementRef) { }

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

  @HostListener("mousemove", ['$event'])
   onMouseMove(event: MouseEvent) {
     this.mouse.x = event.pageX;
     this.mouse.y = event.pageY;
   }
    

  ngOnInit() {
    for (let i = 0; i < 8; i++) {
      const d = new Dot();
      this.dots.push(d);
      //this.element.nativeElement.appendChild(d.node);
    }

    const animate = () => {
      this.draw();
      requestAnimationFrame(animate);
    };

    animate();
  }

  draw() {
    let x = this.mouse.x;
    let y = this.mouse.y;
    console.log(x,y)

    this.dots.forEach((dot, index, dots) => {
      const nextDot = dots[index + 1] || dots[0];

      dot.x = x;
      dot.y = y;
      dot.draw();
      x += (nextDot.x - dot.x) * 0.9;
      y += (nextDot.y - dot.y) * 0.9;
    });
  }

}
