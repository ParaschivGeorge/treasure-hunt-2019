import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MainService} from './services/main.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lsac-treasure-hunt';
  collapsed = true;
  section: string;

  constructor(private route: ActivatedRoute, private router: Router, private mainService: MainService) {
  }

  changeSection(section: string) {
    if (section === this.section) {
      this.mainService.emitNavigationEvent(section);
    } else {
      this.section = section;
      this.router.navigate(['home', section]);
    }
    this.toggleCollapsed();
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
