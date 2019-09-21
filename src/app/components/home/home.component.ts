import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MainService} from '../../services/main.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContactMessage} from '../../models/contact-message';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sections = ['welcome', 'register', 'guide', 'partners', 'contact', 'event'];
  section: string;
  contactSuccess = false;
  contactError = false;

  contactForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, Validators.required)
  });

  constructor(private route: ActivatedRoute, private router: Router, private mainService: MainService) {
  }

  changeSection(section: string) {
    if (section === this.section) {
      this.mainService.emitNavigationEvent(section);
    } else {
      this.section = section;
      this.router.navigate(['home', section]);
    }
  }

  ngOnInit() {
    this.contactForm.valueChanges.subscribe(() => { this.contactSuccess = false; this.contactError = false; });
    this.mainService.navigationSubject.asObservable().subscribe(
      section => this.scrollToElement(section)
    );
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

  onSubmitContact() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.getRawValue() as ContactMessage);
      this.mainService.createContactMessage(this.contactForm.getRawValue() as ContactMessage)
        .then(res => {
          console.log('Message added:', res);
          this.contactForm.reset();
          this.contactSuccess = true;
          this.contactError = false;
        })
        .catch(error => {
          console.log(error);
          this.contactSuccess = false;
          this.contactError = true;
        });
    }
  }
}
