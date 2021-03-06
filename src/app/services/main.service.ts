import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {AngularFirestore, DocumentChangeAction} from '@angular/fire/firestore';
import {ContactMessage} from '../models/contact-message';
import {Participant} from '../models/participant';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  public navigationSubject: Subject<string> = new Subject();

  constructor(private firestore: AngularFirestore) { }

  emitNavigationEvent(section: string) {
    this.navigationSubject.next(section);
  }

  createContactMessage(message: ContactMessage): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('contactMessages')
        .add(message)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  createParticipant(participant: Participant): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('participants')
        .add(participant)
        .then(res => {
          resolve(res);
        }, err => reject(err));
    });
  }

  getContactMessages(): Observable<any> {
    return this.firestore.collection('contactMessages').snapshotChanges();
  }

  getParticipants(): Observable<any> {
    return this.firestore.collection('participants', ref => ref.orderBy('team')).snapshotChanges();
  }
}
