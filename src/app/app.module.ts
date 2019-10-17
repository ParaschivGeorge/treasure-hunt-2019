import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {RegisterSoloComponent} from './components/register-solo/register-solo.component';
import {RegisterTeamComponent} from './components/register-team/register-team.component';
import {GuideComponent} from './components/guide/guide.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { ContactMessagesComponent } from './components/contact-messages/contact-messages.component';
import { ParticipantsComponent } from './participants/participants.component';
import { StoryUnlockComponent } from './components/story-unlock/story-unlock.component';
import {QRCodeModule} from 'angular2-qrcode';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterSoloComponent,
    RegisterTeamComponent,
    GuideComponent,
    ContactMessagesComponent,
    ParticipantsComponent,
    StoryUnlockComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    QRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
