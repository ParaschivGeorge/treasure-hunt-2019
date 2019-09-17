import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sections = ['welcome', 'register', 'guide', 'partners', 'contact', 'event'];

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params && params.section) {
        if (!this.sections.includes(params.section)) {
          this.router.navigate(['home', 'welcome']);
        } else {
          this.scrollToElement(params.section);
        }
      } else {
        this.router.navigate(['home', 'welcome']);
      }
    });
  }

  scrollToElement(element: string) {
    const x = document.querySelector('#' + element);
    if (x) {
      const y = x.getBoundingClientRect().top + window.scrollY; // -
      // x.scrollIntoView() // +
      window.scrollTo({top: y, behavior: 'smooth'}); // -
    }
  }
}
