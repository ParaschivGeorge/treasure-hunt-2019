import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegisterSoloComponent} from './components/register-solo/register-solo.component';
import {RegisterTeamComponent} from './components/register-team/register-team.component';
import {GuideComponent} from './components/guide/guide.component';
import {ContactMessagesComponent} from './components/contact-messages/contact-messages.component';
import {ParticipantsComponent} from './participants/participants.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/welcome', pathMatch: 'full'},
  { path: 'home/:section', component: HomeComponent},
  { path: 'register-solo', component: RegisterSoloComponent},
  { path: 'register-team', component: RegisterTeamComponent},
  { path: 'guide', component: GuideComponent},
  // { path: 'contactMessages', component: ContactMessagesComponent},
  { path: 'participants', component: ParticipantsComponent},
  { path: '**', redirectTo: 'home/welcome' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
