import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Participant} from '../../models/participant';
import {MainService} from '../../services/main.service';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.css']
})
export class RegisterTeamComponent implements OnInit {

  registerSuccess = false;
  registerError = false;

  teamNameFormControl: FormControl = new FormControl(null, Validators.required);

  registerTeam1Form: FormGroup = new FormGroup({
    lastName: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    firstName: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    phone: new FormControl(null, [Validators.required, Validators.pattern('07[0-9]{8}')]),
    university: new FormControl({value: 'Automatica si Calculatoare', disabled: true}, [Validators.required]),
    facebookLink: new FormControl(null),
    team: new FormControl(null),
    preferredTeammate: new FormControl({value: null, disabled: true})
  });

  registerTeam2Form: FormGroup = new FormGroup({
    lastName: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    firstName: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    phone: new FormControl(null, [Validators.required, Validators.pattern('07[0-9]{8}')]),
    university: new FormControl({value: 'Automatica si Calculatoare', disabled: true}, [Validators.required]),
    facebookLink: new FormControl(null),
    team: new FormControl(null),
    preferredTeammate: new FormControl({value: null, disabled: true})
  });

  registerTeam3Form: FormGroup = new FormGroup({
    lastName: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    firstName: new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z ]*')]),
    phone: new FormControl(null, [Validators.required, Validators.pattern('07[0-9]{8}')]),
    university: new FormControl('Automatica si Calculatoare', [Validators.required]),
    facebookLink: new FormControl(null),
    team: new FormControl(null),
    preferredTeammate: new FormControl({value: null, disabled: true})
  });

  registerTeamForm: FormGroup = new FormGroup({
    teamName: this.teamNameFormControl,
    member1: this.registerTeam1Form,
    member2: this.registerTeam2Form,
    member3: this.registerTeam3Form,
  });

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    window.scrollTo({top: 0, behavior: 'auto'});
    this.registerTeamForm.valueChanges.subscribe(() => {
      this.registerSuccess = false;
      this.registerError = false;
    });
  }

  registerTeam() {
    if (this.registerTeamForm.valid) {
      const formValue = this.registerTeamForm.getRawValue();
      const teamName: string = formValue.teamName;
      const participant1: Participant = formValue.member1 as Participant;
      const participant2: Participant = formValue.member2 as Participant;
      const participant3: Participant = formValue.member3 as Participant;
      participant1.team = teamName;
      participant2.team = teamName;
      participant3.team = teamName;
      console.log(teamName, participant1, participant2, participant3);
      const participants = [participant1, participant2, participant3];
      let registeredMembers = 0;
      participants.forEach(participant => {
        this.mainService.createParticipant(participant)
          .then(res => {
            console.log('Participant added:', res);
            registeredMembers++;
            this.resetForm(registeredMembers);
          })
          .catch(err => {
            console.log(err);
            this.registerError = true;
            this.registerSuccess = false;
          });
      });
    }
  }

  resetForm(registeredMembers: number) {
    if (registeredMembers >= 3) {
      this.registerTeamForm.reset();
      this.registerSuccess = true;
      this.registerError = false;
    }
  }

}
