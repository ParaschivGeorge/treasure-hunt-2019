import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-team',
  templateUrl: './register-team.component.html',
  styleUrls: ['./register-team.component.css']
})
export class RegisterTeamComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo({top: 0, behavior: 'auto'});
  }

}
