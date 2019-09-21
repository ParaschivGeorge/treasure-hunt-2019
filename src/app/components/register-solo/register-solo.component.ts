import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Participant} from '../../models/participant';
import {MainService} from '../../services/main.service';

@Component({
  selector: 'app-register-solo',
  templateUrl: './register-solo.component.html',
  styleUrls: ['./register-solo.component.css']
})
export class RegisterSoloComponent implements OnInit {

  registerSuccess = false;
  registerError = false;

  registerSoloForm: FormGroup = new FormGroup({
    lastName: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    firstName: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    phone: new FormControl(null, [Validators.required, Validators.pattern('07[0-9]{8}')]),
    university: new FormControl({ value: 'Automatica si Calculatoare', disabled: true }, [Validators.required]),
    facebookLink: new FormControl(null),
    team: new FormControl({ value: null, disabled: true }),
    preferredTeammate: new FormControl(null)
  });

  constructor(private mainService: MainService) { }

  ngOnInit() {
    window.scrollTo({top: 0, behavior: 'auto'});
    this.registerSoloForm.valueChanges.subscribe(() => { this.registerSuccess = false; this.registerError = false; });
  }

  registerSolo() {
    if (this.registerSoloForm.valid) {
      console.log(this.registerSoloForm.getRawValue() as Participant);
      this.mainService.createParticipant(this.registerSoloForm.getRawValue() as Participant)
        .then(res => {
          console.log('Participant added:', res);
          this.registerSoloForm.reset();
          this.registerSuccess = true;
          this.registerError = false;
        })
        .catch(error => {
          console.log(error);
          this.registerSuccess = false;
          this.registerError = true;
        });
    }
  }
}
