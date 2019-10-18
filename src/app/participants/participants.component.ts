import {Component, OnInit} from '@angular/core';
import {MainService} from '../services/main.service';
import {Participant} from '../models/participant';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  teams: { team: string; members: string[] }[];

  constructor(private mainService: MainService) {
  }

  ngOnInit() {
    this.mainService.getParticipants().subscribe(
      res => {
        const tempParticipants: Participant[] = res.map(p => p.payload.doc.data());
        const tempTeams: { team: string; members: string[] }[] = [];
        tempParticipants.forEach(p => {
          const team = tempTeams.find(t => t.team === p.team);
          if (!team) {
            tempTeams.push({team: p.team, members: [p.firstName + ' ' + p.lastName]});
          } else {
            team.members.push(p.firstName + ' ' + p.lastName);
          }
        });
        this.teams = tempTeams;
      });
  }
}
