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

  sections = ['welcome', 'guide', 'partners', 'contact', 'event'];
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
      section => {
        if (this.router.url === '/home/' + section) {
          this.scrollToElement(section);
        }
        this.router.navigate(['home', section]);
        console.log(this.router.url);
      }
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

  goToLeplace() {
    window.open('https://www.leplace.online/', '_blank');
  }

  goToAmericanExperience() {
    window.open('https://www.americanexperience.ro/', '_blank');
  }

  goToFirstCopy() {
    window.open('http://firstcopy.ro/index.html', '_blank');
  }

  goToLasertagArena() {
    window.open('http://www.lasertag-arena.ro/', '_blank');
  }

  goToInfoSystems() {
    window.open('https://www.infosys.com/romania-digital-innovation-center/', '_blank');
  }

  goToConstantinNautics() {
    window.open('https://constantinnautics.ro/', '_blank');
  }
}
