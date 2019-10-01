import { Component, OnInit } from '@angular/core';
import {MainService} from '../services/main.service';

@Component({
  selector: 'app-participants',
  templateUrl: './participants.component.html',
  styleUrls: ['./participants.component.css']
})
export class ParticipantsComponent implements OnInit {

  participants: any[] = null;

  constructor(private mainService: MainService) { }

  ngOnInit() {
    this.mainService.getParticipants().subscribe(
      res => { this.participants = res; console.log(res); }
    );
  }
}
