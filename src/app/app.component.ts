import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lsac-treasure-hunt';
  collapsed = true;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  changeSection(section: string) {
    this.router.navigate(['home', section]);
    this.toggleCollapsed();
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
