import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
  @Input() link: any; 
  @Input() size: any;
  @Input() type: any;
  @Input() title: any;
  @Input() iconName: any;
  @Input() click: any;
  
  constructor() { }

  ngOnInit(): void { }

  triggerAction(event: any, action: string) {
    event.stopPropagation();
    if(!action) {
      return;
    };

    switch(action) {
      case 'windowTop': window.scrollTo(0,0); console.log('window scroll to');
    };
  }
}