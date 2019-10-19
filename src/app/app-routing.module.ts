import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegisterSoloComponent} from './components/register-solo/register-solo.component';
import {RegisterTeamComponent} from './components/register-team/register-team.component';
import {GuideComponent} from './components/guide/guide.component';
import {ContactMessagesComponent} from './components/contact-messages/contact-messages.component';
import {ParticipantsComponent} from './participants/participants.component';
import {StoryUnlockComponent} from './components/story-unlock/story-unlock.component';
import {StoryUnlockRrService} from './services/story-unlock-rr.service';
import {LeaderboardComponent} from './components/leaderboard/leaderboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/welcome', pathMatch: 'full'},
  { path: 'home/:section', component: HomeComponent},
  { path: 'register-solo', component: RegisterSoloComponent},
  { path: 'register-team', component: RegisterTeamComponent},
  { path: 'guide', component: GuideComponent},
  { path: 'contactMessages', component: ContactMessagesComponent},
  // { path: 'participants', component: ParticipantsComponent},
  { path: 'leaderboard', component: LeaderboardComponent },
  { path: 'unlock', children: [
      {path: 'ateneul', component: StoryUnlockComponent, data: { eventId: 5, storyId: 321}, resolve: {storyUnlock: StoryUnlockRrService}},
      {path: 'polivalenta', component: StoryUnlockComponent, data: { eventId: 5, storyId: 322}, resolve: {storyUnlock: StoryUnlockRrService}},
      {path: 'universitate', component: StoryUnlockComponent, data: { eventId: 5, storyId: 326}, resolve: {storyUnlock: StoryUnlockRrService}},
      {path: 'herastrau', component: StoryUnlockComponent, data: { eventId: 5, storyId: 323}, resolve: {storyUnlock: StoryUnlockRrService}},
      {path: 'arene', component: StoryUnlockComponent, data: { eventId: 5, storyId: 324}, resolve: {storyUnlock: StoryUnlockRrService}},
      {path: 'infosys', component: StoryUnlockComponent, data: { eventId: 5, storyId: 319}, resolve: {storyUnlock: StoryUnlockRrService}},
      {path: 'titan', component: StoryUnlockComponent, data: { eventId: 5, storyId: 327}, resolve: {storyUnlock: StoryUnlockRrService}},
      {path: 'tei', component: StoryUnlockComponent, data: { eventId: 5, storyId: 325}, resolve: {storyUnlock: StoryUnlockRrService}},
      {path: 'taberei', component: StoryUnlockComponent, data: { eventId: 5, storyId: 320}, resolve: {storyUnlock: StoryUnlockRrService}},
      {path: 'bazilescu', component: StoryUnlockComponent, data: { eventId: 5, storyId: 317}, resolve: {storyUnlock: StoryUnlockRrService}},
    ]},
  { path: '**', redirectTo: 'home/welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
