import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-app-guide',
  templateUrl: './app-guide.component.html',
  styleUrls: ['./app-guide.component.css']
})
export class AppGuideComponent implements OnInit {

  constructor() { }

  public innerWidth: any;

  ngOnInit() {
    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.innerWidth = window.innerWidth;
  }
}
