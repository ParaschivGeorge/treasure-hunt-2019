import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StoryUnlock} from '../../models/story-unlock';

@Component({
  selector: 'app-story-unlock',
  templateUrl: './story-unlock.component.html',
  styleUrls: ['./story-unlock.component.css']
})
export class StoryUnlockComponent implements OnInit {

  storyUnlock: StoryUnlock;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(this.route.snapshot.data);
    this.storyUnlock = this.route.snapshot.data.storyUnlock;
  }

}
