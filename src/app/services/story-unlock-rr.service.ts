import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {StoryUnlock} from '../models/story-unlock';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StoryUnlockRrService implements Resolve<StoryUnlock> {

  url = 'https://leplace.leplace-api.com/events/v2/admin/get-story-unlock-code';

  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StoryUnlock> | Promise<StoryUnlock> | StoryUnlock {
    const headers = new HttpHeaders()
      .append('Authorization',
        'Bearer eyJhbGciOiJIUzI1NiJ9.TFNBQ1N1biwgMjIgU2VwIDIwMTkgMTE6Mjc6NDcgR01U.fDAhtnQjD3n6fk5I1Ya9DaAVK7T7y_yqrke-C62ZTeU');
    return this.http.post<StoryUnlock>(this.url, route.data, {headers});
  }
}
