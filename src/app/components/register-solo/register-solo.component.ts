import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-solo',
  templateUrl: './register-solo.component.html',
  styleUrls: ['./register-solo.component.css']
})
export class RegisterSoloComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({top: 0, behavior: 'auto'});
  }

}
