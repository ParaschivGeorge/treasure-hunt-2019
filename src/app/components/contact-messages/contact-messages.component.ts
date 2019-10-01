import { Component, OnInit } from '@angular/core';
import {ContactMessage} from '../../models/contact-message';
import {MainService} from '../../services/main.service';

@Component({
  selector: 'app-contact-messages',
  templateUrl: './contact-messages.component.html',
  styleUrls: ['./contact-messages.component.css']
})
export class ContactMessagesComponent implements OnInit {

  contactMessages: any[] = null;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getContactMessages().subscribe(
      res => {this.contactMessages = res; console.log(res); }
    );
  }

}
