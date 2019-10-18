import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {StoryUnlock} from '../../models/story-unlock';
import {Score} from '../../models/score';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {

  url = 'https://leplace.leplace-api.com/events/v2/admin/view-event-leaderboard';
  data = { eventId: 5, extended: false };
  scores: Score[];

  constructor(private http: HttpClient) {
  }


  ngOnInit() {
    const headers = new HttpHeaders()
      .append('Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.TFNBQ1N1biwgMjIgU2VwIDIwMTkgMTE6Mjc6NDcgR01U.fDAhtnQjD3n6fk5I1Ya9DaAVK7T7y_yqrke-C62ZTeU');
    this.http.post<any>(this.url, this.data, {headers}).subscribe(
      data => {
        this.scores = data.data.leaderboard as Score[];
        this.scores.sort((s1, s2) => s1.position - s2.position);
        console.log(this.scores);
      }
    );
  }

}
