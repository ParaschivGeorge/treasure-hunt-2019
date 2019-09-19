import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Participant} from '../../models/participant';

@Component({
  selector: 'app-register-solo',
  templateUrl: './register-solo.component.html',
  styleUrls: ['./register-solo.component.css']
})
export class RegisterSoloComponent implements OnInit {

  registerSoloForm: FormGroup = new FormGroup({
    lastName: new FormControl(null, [Validators.required]),
    firstName: new FormControl(null, [Validators.required]),
    phone: new FormControl(null, [Validators.required]),
    university: new FormControl({ value: 'Automatica si Calculatoare', disabled: true }, [Validators.required]),
    facebookLink: new FormControl(null, ),
    team: new FormControl({ value: null, disabled: true }),
    preferredTeammate: new FormControl(null)
  });

  constructor() { }

  ngOnInit() {
    window.scrollTo({top: 0, behavior: 'auto'});
  }

  registerSolo() {
    if (this.registerSoloForm.valid) {
      console.log(this.registerSoloForm.getRawValue() as Participant);
    }
  }
}
