import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CoreEnvironment } from '@angular/core/src/render3/jit/compiler_facade_interface';
import { User, UserToRegister } from '../models/user';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiBaseUrl;
  reservedUsers: UserToRegister[] = [
    { id: 1, name: 'Ali'},
    { id: 2, name: 'Samane'},
    { id: 3, name: 'Parnaz'},
    { id: 4, name: 'Omid'},
    { id: 5, name: 'Ehsan'},
    { id: 6, name: 'Minoo'}];
  
    constructor(
    private http: HttpClient
  ) { }

  getUserlist(): Observable<any> {
    return this.http.get(`${this.baseUrl}/users`);
  }

  getUserPosts(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/posts?userId=${id}`);
  }

  availableUser(username: string) {
    const index = this.reservedUsers.findIndex(a => a.name.toLowerCase() === username.toLowerCase() );
    if (index == -1) {
      return true;
    } else {
      return false;
    }
  }
}
