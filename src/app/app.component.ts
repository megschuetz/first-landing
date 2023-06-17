import { Component, HostListener, OnInit, ElementRef } from '@angular/core';
import { Dot, Mouse } from './helpers/dot-helper'
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showAnimateHeader: boolean = true;
  showStickyHeader: boolean = false; 
  title: string = 'first-landing';
  dots: Dot[] = []
  mouse: Mouse = {
    x: 0,
    y: 0
  }

  constructor(public element: ElementRef, private router: Router) { }

  onActivate() {
    console.log('on Active here')
    window.scrollTo(0,0)
    console.log('should have scrolled to top')
    if(this.router.url.length > 1) { this.showAnimateHeader = false; this.showStickyHeader = true }
    if(this.router.url.length == 1) { this.showAnimateHeader = true; this.showStickyHeader = false }
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
      this.element.nativeElement.appendChild(d.node);
    }

    const animate = () => {
      this.draw();
      requestAnimationFrame(animate);
    };

   //animate();
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
