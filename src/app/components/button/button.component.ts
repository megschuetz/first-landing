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
  
  constructor() { }

  ngOnInit(): void { }
}