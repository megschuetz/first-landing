import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent {
  @Input() link: any; 
  @Input() size: any;
  @Input() type: any;
  @Input() title: any;
  @Input() iconName: any;
  @Input() click: any;
  
  constructor() { }

  triggerAction(event: any, action: string) { 
    if(!action) {
      return;
    };

    switch(action) {
      case 'windowTop': window.scrollTo({top: 0, behavior: 'smooth'}); 
    };
  }
}